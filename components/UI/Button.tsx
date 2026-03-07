import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text' | 'dark';
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
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-[0.15em] uppercase text-[10px] sm:text-[11px] h-fit";
  
  const variants = {
    primary: "bg-brand-primary text-brand-black hover:bg-brand-gold-light hover:shadow-gold border border-brand-primary rounded-none active:scale-[0.98]",
    secondary: "bg-brand-black text-white hover:bg-brand-secondary border border-brand-black rounded-none active:scale-[0.98]",
    dark: "bg-slate-900 text-brand-primary hover:bg-brand-black border border-slate-800 rounded-none active:scale-[0.98]",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-black rounded-none active:scale-[0.98]",
    ghost: "bg-transparent text-brand-dark hover:text-brand-primary hover:bg-gray-50 rounded-none active:scale-[0.98]",
    text: "text-brand-primary hover:text-brand-gold-dark p-0 underline decoration-brand-primary/30 underline-offset-4 hover:decoration-brand-primary capitalize tracking-normal"
  };

  const sizes = {
    sm: "px-5 py-2.5",
    md: "px-8 py-4",
    lg: "px-12 py-5"
  };

  const finalSize = variant === 'text' ? '' : sizes[size];

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${finalSize} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {withArrow && <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${variant === 'text' ? 'mt-0.5' : ''}`} />}
      </span>
    </button>
  );
};

export default Button;