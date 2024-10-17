'use client';
import { signOut, useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';

import { Trip } from '@opt/core/interfaces';
import { TripActions } from '@opt/integration/actions/';
import { useRouter } from '@opt/navigations';
import { useTripStore } from '@opt/store';
import { ActionButton } from '@repo/ui/';

export default function StepperFlow({ steps }: any) {
  const { tripTitle, tripType, priority, step, setStep, reset } =
    useTripStore();
  const session = useSession();
  const router = useRouter();

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
    const { createTrip } = TripActions;
    const newTrip: Trip = {
      title: tripTitle,
      tripType: tripType!,
      priority: priority!,
      description: `A ${tripType} Trip with ${priority} priority to ${tripTitle}`,
      userId: session.data?.user?.id!,
    };
    const result = await createTrip(newTrip);
    if (result?.success) {
      router.push('/trips');
      reset();
    } else {
      signOut();
      toast.error(result?.error as string);
    }
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
