import { LeftCircleArrow } from '@repo/ui';
import { signOut } from '@sss/auth';

export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">
        <LeftCircleArrow />
      </button>
    </form>
  );
}
