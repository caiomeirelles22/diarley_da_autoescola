'use client';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface AnchorProps {
  children: ReactNode;
  href: string; 
  className?: string; 
}

export const Anchor: React.FC<AnchorProps> = ({ children, href, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${href}`} 
      className={twMerge('border border-solid border-[#191013] rounded-md p-2 bg-[#243a69] text-[#f4f4f2] w-fit mx-auto hover:bg-[#5b88a5] transition-colors', className)}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
