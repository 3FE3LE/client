'use client';
import { PlusCircle, Search } from 'lucide-react';

import { useRouter } from '@opt/i18n/routing';
import { useTripStore } from '@opt/store';
import { ActionButton, InputField } from '@repo/ui';

export const TripSearch = () => {
  const router = useRouter();

  const { searchTerm, setSearchTerm } = useTripStore();

  return (
    <>
      <ActionButton variant="primary" onClick={() => router.push('/trips/new')}>
        <PlusCircle color="#eee" className="btn__icon" /> New Trip
      </ActionButton>
      <InputField
        placeholder="Search trips..."
        value={searchTerm}
        name="search"
        handleChange={(e) => setSearchTerm(e.target.value)}
      >
        <ActionButton type="icon">
          <Search />
        </ActionButton>
      </InputField>
    </>
  );
};
