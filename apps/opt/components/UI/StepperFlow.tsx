'use client';
import { useState } from 'react';

import { useRouter } from '@opt/navigations';
import { ActionButton, Card } from '@repo/ui/';

export default function StepperFlow({ steps }: any) {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepper">
      <article className="stepper__container">{steps[currentStep]}</article>
      <div className="stepper__footer">
        <ActionButton
          onClick={currentStep === 0 ? router.back : prevStep}
          variant="primary"
        >
          Anterior
        </ActionButton>
        <ActionButton
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          variant="primary"
        >
          {currentStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
        </ActionButton>
      </div>
    </div>
  );
}
