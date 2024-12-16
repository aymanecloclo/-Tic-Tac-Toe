import React from 'react';
import { getCurrentYear } from '../utils/dateUtils';

export const Footer: React.FC = () => {
  return (
    <footer className="p-4 border-t">
      <div className="container mx-auto text-center">
        <p>© {getCurrentYear()} Salur. All rights reserved.</p>
      </div>
    </footer>
  );
};