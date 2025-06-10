import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'rounded-full font-medium transition-colors';
  
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/20',
    secondary: 'bg-purple-50 text-purple-700 hover:bg-purple-100',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2 text-sm',
    lg: 'px-8 py-3 text-base'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}; 

export default Button;