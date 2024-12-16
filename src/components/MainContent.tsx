import React from 'react';
import { useGreeting } from '../hooks/useGreeting';

export const MainContent: React.FC = () => {
  const greeting = useGreeting();

  return (
    <main className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{greeting}</h2>
        <p className="text-lg">
          Welcome to this well-structured React application. Each component and utility
          has been carefully organized following best practices.
        </p>
      </div>
    </main>
  );
};