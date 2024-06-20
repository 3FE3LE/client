import * as React from 'react';
import {
  StyleSheet,
  GestureResponderEvent,
  Text,
  Pressable,
} from 'react-native';

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    textAlign: 'center',
    borderRadius: 12,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 15,
    backgroundColor: '#00916E',
  },
  text: {
    color: '#EEEEEE',
  },
});
