'use client';
import { useTripStore } from '@opt/store/tripStore';
import { InputField } from '@repo/ui';

export const TripCreationStep = () => {
  const { tripTitle, setTripTitle, setStep } = useTripStore();
  return (
    <div className="step">
      <h1 className="step__title">Put a name to your adventure</h1>
      <article className="step__container">
        <InputField
          name="Title"
          handleChange={setTripTitle}
          value={tripTitle}
          handleSubmit={() => setStep(1)}
          placeholder="Type your adventure name here"
        />
      </article>
    </div>
  );
};
