import { ReactNode, ButtonHTMLAttributes, MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string
}

export function Button({ children, onClick, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={twMerge('bg-[#011640] text-white py-2 px-4 rounded-md hover:bg-[#113859] transition-colors', className)}
    >
      {children}
    </button>
  );
}
