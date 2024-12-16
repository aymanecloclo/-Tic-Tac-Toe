import { useState, useEffect } from 'react';
import { getTimeBasedGreeting } from '../utils/greetingUtils';

export const useGreeting = () => {
  const [greeting, setGreeting] = useState(getTimeBasedGreeting());

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getTimeBasedGreeting());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return greeting;
};