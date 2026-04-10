import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-10 py-5 text-base font-bold rounded-xl transition-all duration-300 active:scale-[0.98]";
  
  const variantStyles = {
    primary: "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:from-indigo-500 hover:to-purple-500 hover:shadow-[0_15px_40px_-10px_rgba(79,70,229,0.6)]",
    secondary: "text-zinc-900 dark:text-white bg-transparent border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/5"
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} suppressHydrationWarning {...props}>
      {children}
    </button>
  );
};
