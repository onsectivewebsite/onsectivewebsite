import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants: Record<string, string> = {
    primary: 'bg-brand-primary text-white rounded-md hover:bg-brand-gold-dark',
    secondary: 'bg-brand-dark text-white rounded-md hover:bg-brand-navy-light',
    outline:
      'border border-brand-dark text-brand-dark rounded-md hover:bg-brand-dark hover:text-white',
    ghost: 'text-brand-primary hover:underline underline-offset-4',
  };

  const sizes: Record<string, string> = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const sizeClass = variant === 'ghost' ? 'text-sm' : sizes[size];

  return (
    <button
      className={`${base} ${variants[variant]} ${sizeClass} ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </span>
    </button>
  );
};

export default Button;
