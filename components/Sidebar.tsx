
import React from 'react';
import { Icon } from './Icon';
import type { IconName } from './Icon';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeView: string;
  setActiveView: (view: string) => void;
}

const navLinks: { name: string; icon: IconName }[] = [
  { name: 'Dashboard', icon: 'home' },
  { name: 'Services', icon: 'server' },
  { name: 'Billing', icon: 'invoice' },
  { name: 'Support', icon: 'ticket' },
  { name: 'Settings', icon: 'settings' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, activeView, setActiveView }) => {

  const handleNavClick = (viewName: string) => {
    setActiveView(viewName);
    if(window.innerWidth < 1024) {
      setIsOpen(false);
    }
  }

  const NavItem: React.FC<{ name: string; icon: IconName }> = ({ name, icon }) => {
    const isActive = activeView === name;
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(name);
        }}
        className={`flex items-center px-4 py-2 mt-5 rounded-md transition-colors duration-200 ${
          isActive
            ? 'bg-primary-600 text-white'
            : 'text-slate-200 hover:bg-slate-700 hover:text-white'
        }`}
      >
        <Icon name={icon} className="h-6 w-6" />
        <span className="mx-4 font-medium">{name}</span>
      </a>
    );
  };

  return (
    <>
      <div className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}>
      </div>
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 px-4 py-5 overflow-y-auto bg-slate-800 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <Icon name="logo" className="w-8 h-8 text-white"/>
            <span className="ml-2 text-2xl font-semibold text-white">Nexus</span>
          </div>
        </div>
        <nav className="mt-10">
          {navLinks.map((link) => (
            <NavItem key={link.name} name={link.name} icon={link.icon} />
          ))}
        </nav>
      </div>
    </>
  );
};
