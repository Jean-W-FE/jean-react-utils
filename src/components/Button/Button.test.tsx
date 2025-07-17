import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './index';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary');
  });

  it('renders with different variants', () => {
    const variants = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const;
    
    variants.forEach((variant) => {
      render(<Button variant={variant}>Button</Button>);
      const button = screen.getByRole('button', { name: /button/i });
      
      switch (variant) {
        case 'destructive':
          expect(button).toHaveClass('bg-destructive');
          break;
        case 'outline':
          expect(button).toHaveClass('border-input');
          break;
        case 'secondary':
          expect(button).toHaveClass('bg-secondary');
          break;
        case 'ghost':
          expect(button).toHaveClass('hover:bg-accent');
          break;
        case 'link':
          expect(button).toHaveClass('underline-offset-4');
          break;
        default:
          expect(button).toHaveClass('bg-primary');
      }
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['default', 'sm', 'lg', 'icon'] as const;
    
    sizes.forEach((size) => {
      render(<Button size={size}>Button</Button>);
      const button = screen.getByRole('button', { name: /button/i });
      
      switch (size) {
        case 'sm':
          expect(button).toHaveClass('h-8');
          break;
        case 'lg':
          expect(button).toHaveClass('h-10');
          break;
        case 'icon':
          expect(button).toHaveClass('h-9 w-9');
          break;
        default:
          expect(button).toHaveClass('h-9');
      }
    });
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button</Button>);
    
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('applies custom className', () => {
    const customClass = 'custom-class';
    render(<Button className={customClass}>Button</Button>);
    
    const button = screen.getByRole('button', { name: /button/i });
    expect(button).toHaveClass(customClass);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });
}); 