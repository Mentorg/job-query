import { useState } from "react";

type KeyName = string;

type ReturnValue<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export function useLocalStorage<T>(
  keyName: KeyName,
  defaultValue: T | (() => T),
): ReturnValue<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      return value
        ? JSON.parse(value)
        : defaultValue instanceof Function
          ? defaultValue()
          : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${keyName}":`, error);
      return defaultValue instanceof Function ? defaultValue() : defaultValue;
    }
  });

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(keyName, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${keyName}"`, error);
    }
  };

  return [storedValue, setValue];
}
