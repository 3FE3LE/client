"use client";

import { Button } from "@repo/ui";

import styles from "../styles/index.module.scss";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Este el admin dashboard</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
    </div>
  );
}
