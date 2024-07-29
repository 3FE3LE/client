import { useSession } from 'next-auth/react';

import { SignOutButton } from './SignOutButton';

export const Sidebar = () => {
  const session = useSession();
  return (
    session.data && (
      <aside className="sidebar">
        <ul>
          <li></li>
        </ul>
        <SignOutButton />
      </aside>
    )
  );
};
