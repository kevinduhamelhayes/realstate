"use client";

/**
 * Store a value in localStorage
 * @param key - The key to store the value under
 * @param value - The value to store
 */
export function saveToLocalStorage<T>(key: string, value: T): void {
  if (typeof window !== 'undefined') {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
}

/**
 * Retrieve a value from localStorage
 * @param key - The key to retrieve the value for
 * @param defaultValue - The default value to return if the key doesn't exist
 * @returns The value from localStorage, or the default value if it doesn't exist
 */
export function getFromLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window !== 'undefined') {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return defaultValue;
      }
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error('Error retrieving from localStorage:', error);
      return defaultValue;
    }
  }
  return defaultValue;
}

/**
 * Remove a value from localStorage
 * @param key - The key to remove from localStorage
 */
export function removeFromLocalStorage(key: string): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }
} 