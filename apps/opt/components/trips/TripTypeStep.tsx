'use client';
import {
  BabyIcon,
  BriefcaseBusinessIcon,
  CalendarHeartIcon,
  HeartHandshakeIcon,
  PersonStandingIcon,
  UsersRoundIcon,
} from 'lucide-react';
import React from 'react';

import { useTripStore } from '@opt/store/tripStore';
import { ActionButton } from '@repo/ui';

const IconSize = '3rem';
const types = [
  { id: 'SOLO', icon: PersonStandingIcon, label: 'Solo' },
  { id: 'FAMILIAR', icon: BabyIcon, label: 'Family' },
  { id: 'FRIENDS', icon: HeartHandshakeIcon, label: 'Friends' },
  { id: 'COUPLE', icon: CalendarHeartIcon, label: 'Couple' },
  { id: 'BUSINESS', icon: BriefcaseBusinessIcon, label: 'Business' },
  { id: 'GROUP', icon: UsersRoundIcon, label: 'Group' },
];

export const TripTypeStep = () => {
  const { tripType, setTripType } = useTripStore();

  const currenType = types.find((t) => t.id === tripType);

  const [selectedType, setSelectedType] = React.useState<
    (typeof types)[0] | null
  >(currenType!);

  const isOptionSelected = (selected: string) =>
    selectedType?.id === selected ? '#00916e' : 'currentColor';

  const handleTypeSelect = (type: typeof selectedType) => {
    setSelectedType(type);
    if (type) setTripType(type.id);

    // Aquí puedes agregar la lógica para pasar a la siguiente pantalla
  };
  return (
    <div className="step">
      <h1 className="step__title">
        Great!, what kind of trip are you planning?
      </h1>
      <div className="step__container">
        {types.map((type) => (
          <div
            key={type.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              color: `${isOptionSelected(type.id)}`,
            }}
          >
            <ActionButton
              onClick={() => handleTypeSelect(type)}
              type="icon"
              size="small"
            >
              <type.icon size={IconSize} color={isOptionSelected(type.id)} />
            </ActionButton>
            <span>{type.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
