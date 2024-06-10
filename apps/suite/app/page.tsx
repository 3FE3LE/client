"use client";

import { Button } from "@repo/ui";

import styles from "../styles/index.module.css";
import { Form } from "./components/Form";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Esta es la suite</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
      <Form/>
    </div>
  );
}
