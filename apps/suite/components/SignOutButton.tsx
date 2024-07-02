'use client';

import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};

export default SignOutButton;
