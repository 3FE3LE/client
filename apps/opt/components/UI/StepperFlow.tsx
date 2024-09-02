'use client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import { TripType } from '@opt/core/trips/types';
import { createTripUseCases } from '@opt/core/trips/useCases';
import { TripRepositoryApi } from '@opt/infrastructure/api/TripRepository';
import { useRouter } from '@opt/navigations';
import { useTripStore } from '@opt/store/tripStore';
import { ActionButton, Card } from '@repo/ui/';

export default function StepperFlow({ steps }: any) {
  const { tripTitle, tripType, priority, step, setStep, reset } =
    useTripStore();
  const session = useSession();
  const router = useRouter();

  const { createTrip } = createTripUseCases(TripRepositoryApi);
  const isValid = !!tripTitle && !!tripType && !!priority;

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else if (isValid) {
      handleFinish();
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleFinish = async () => {
    const newTrip: TripType = {
      title: tripTitle,
      tripType: tripType!,
      priority: priority!,
      description: `A ${tripType} Trip with ${priority} priority to ${tripTitle}`,
      userId: session.data?.user?.id!,
    };
    router.push('/trips');
    await createTrip(newTrip);
    reset();
  };

  return (
    <div className="stepper">
      <article className="stepper__container">{steps[step]}</article>
      <div className="stepper__footer">
        <ActionButton
          onClick={step === 0 ? router.back : prevStep}
          variant="primary"
        >
          {step === 0 ? 'Volver' : 'Anterior'}
        </ActionButton>
        <ActionButton
          onClick={nextStep}
          disabled={step === 2 && !isValid}
          variant="primary"
        >
          {step === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
        </ActionButton>
      </div>
    </div>
  );
}
