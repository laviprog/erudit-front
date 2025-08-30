'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/data/HeaderData';
import { useState } from 'react';
import clsx from 'clsx';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-[500] lg:text-2xl md:text-xl hover:bg-white/15 hover:ring-1 hover:ring-white/30 rounded-xl md:p-3 p-1 transition-all duration-400 ease-in-out">
      {children}
    </Link>
  );
}

function NavLinkCard({
  href,
  name,
  className,
}: {
  href: string;
  name: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'p-4 active:ring-2 active:scale-102 focus:ring-2 focus:scale-102 rounded-xl ring-1 transition',
        className
      )}
    >
      <h3 className="text-white font-[500] text-xl">{name}</h3>
    </Link>
  );
}

function ToggleButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      className="relative w-10 h-6 flex flex-col justify-center items-center md:hidden focus:outline-none"
      onClick={onClick}
      aria-label="Меню"
    >
      <span
        className={`block absolute h-[4px] w-10 bg-white transform transition-all duration-300 ease-in-out ${
          isOpen ? 'rotate-45 top-3' : 'top-1'
        }`}
      ></span>
      <span
        className={`block absolute h-[4px] w-10 bg-white transform transition-all duration-300 ease-in-out ${
          isOpen ? '-rotate-45 top-3' : 'top-5'
        }`}
      ></span>
    </button>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-screen bg-[var(--violet)] flex justify-center z-1000">
      <nav className="w-[80%] py-1">
        <div className="flex items-center justify-between">
          <Link href="/" replace>
            <Image
              src="/logo-full.webp"
              alt="Эрудит пати лого"
              width={500}
              height={500}
              className="pointer-events-none select-none lg:w-60 md:w-50 w-45"
              priority
            />
          </Link>

          <div className="hidden md:flex lg:gap-5">
            {navItems.map(({ href, name }, index) => (
              <NavLink key={index} href={href}>
                {name}
              </NavLink>
            ))}
          </div>

          <ToggleButton isOpen={isOpen} onClick={toggleMenu} />
        </div>

        <div className={`grid grid-cols-1 gap-4 py-3 ${!isOpen && 'hidden'}`}>
          {navItems.map((item) => (
            <NavLinkCard key={item.href} {...item} />
          ))}
        </div>
      </nav>
    </header>
  );
}
