import { cookies } from 'next/headers';

import { LeftCircleArrow } from '@repo/ui';
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
      <button type="submit">
        <LeftCircleArrow />
      </button>
    </form>
  );
}
