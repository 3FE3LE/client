'use client';
import React from 'react';

import { InputField } from '@repo/ui';

export const TripCreationStep = () => {
  const [titleInput, setTitleInput] = React.useState('');
  return (
    <div className="step">
      <h1 className="step__title">Put a name to your adventure</h1>
      <article className="step__container">
        <InputField
          name="Title"
          handleChange={setTitleInput}
          value={titleInput}
          placeholder="Type your adventure name here"
        />
      </article>
    </div>
  );
};
