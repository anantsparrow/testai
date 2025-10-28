
import React from 'react';
import { Icon } from './Icon';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-800 border-b dark:border-slate-700">
      <div className="flex items-center">
        <button onClick={onMenuClick} className="text-slate-500 dark:text-slate-400 focus:outline-none lg:hidden">
          <Icon name="menu" className="h-6 w-6" />
        </button>
      </div>

      <div className="flex items-center">
        <button className="flex mx-4 text-slate-500 dark:text-slate-400 hover:text-primary-500 focus:outline-none">
          <Icon name="bell" className="h-6 w-6" />
        </button>

        <div className="relative">
          <button className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
            <img className="object-cover w-full h-full" src="https://picsum.photos/100/100" alt="Your avatar" />
          </button>
        </div>
      </div>
    </header>
  );
};
