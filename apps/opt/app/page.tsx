'use client';

import { Button } from '@repo/ui';

import styles from '../styles/index.module.css';

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Este es One plan trip</h1>
      <Button onClick={() => console.log('Pressed!')} text="Boop" />
    </div>
  );
}
