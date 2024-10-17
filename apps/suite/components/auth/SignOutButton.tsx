import { ArrowLeftCircleIcon } from 'lucide-react';
import { cookies } from 'next/headers';

import { ActionButton } from '@repo/ui';
import { signOut } from '@sss/auth';

export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        cookies().delete('auth_token');
        await signOut();
      }}
    >
      <ActionButton size="small" type="icon">
        <ArrowLeftCircleIcon />
      </ActionButton>
    </form>
  );
}
