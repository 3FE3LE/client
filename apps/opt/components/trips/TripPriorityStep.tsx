'use client';
import {
  CalendarIcon,
  CompassIcon,
  MapPinIcon,
  UsersIcon,
  WalletIcon,
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes, useState } from 'react';

import { useTripStore } from '@opt/store/tripStore';
import { ActionButton } from '@repo/ui';

const priorities = [
  { id: 'BUDGET', icon: WalletIcon, label: 'Presupuesto' },
  { id: 'DESTINATION', icon: MapPinIcon, label: 'Destino' },
  { id: 'COMPANY', icon: UsersIcon, label: 'Compañía' },
  { id: 'DATES', icon: CalendarIcon, label: 'Fechas' },
  { id: 'EXPERIENCE', icon: CompassIcon, label: 'Experiencia' },
];

const IconSize = '3rem';

export const TripPriorityStep = () => {
  const { priority, setPriority } = useTripStore();

  const currentPriority = priorities.find((p) => p.id === priority);
  const [selectedPriority, setSelectedPriority] = useState<
    (typeof priorities)[0] | null
  >(currentPriority!);

  const isOptionSelected = (selected: string) =>
    selectedPriority?.id === selected ? '#00916e' : 'currentColor';

  const handlePrioritySelect = (priority: typeof selectedPriority) => {
    setSelectedPriority(priority);
    if (priority) setPriority(priority.id);

    // Aquí puedes agregar la lógica para pasar a la siguiente pantalla
  };
  return (
    <div className="step">
      <h1 className="step__title">Ok!, what is yor main trip GOAL?</h1>
      <div className="step__container">
        {priorities.map((priority) => (
          <div
            key={priority.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              color: `${isOptionSelected(priority.id)}`,
            }}
          >
            <ActionButton
              onClick={() => handlePrioritySelect(priority)}
              type="icon"
              size="small"
            >
              <priority.icon
                size={IconSize}
                color={isOptionSelected(priority.id) as string}
              />
            </ActionButton>
            <span>{priority.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
