import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PageTitle, SectionTitle, CardTitle, SubTitle } from './index';

describe('Heading Components', () => {
  describe('PageTitle', () => {
    it('renders with children', () => {
      render(<PageTitle>Welcome</PageTitle>);
      const heading = screen.getByRole('heading', { level: 1, name: /welcome/i });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveClass('text-4xl', 'md:text-5xl', 'font-bold');
    });

    it('renders with title prop', () => {
      render(<PageTitle title="Hello" />);
      const heading = screen.getByRole('heading', { level: 1, name: /hello/i });
      expect(heading).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const customClass = 'custom-class';
      render(<PageTitle className={customClass}>Title</PageTitle>);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass(customClass);
    });
  });

  describe('SectionTitle', () => {
    it('renders with children', () => {
      render(<SectionTitle>Section</SectionTitle>);
      const heading = screen.getByRole('heading', { level: 2, name: /section/i });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveClass('text-3xl', 'font-bold', 'text-center');
    });

    it('renders with title prop', () => {
      render(<SectionTitle title="Section" />);
      const heading = screen.getByRole('heading', { level: 2, name: /section/i });
      expect(heading).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const customClass = 'custom-class';
      render(<SectionTitle className={customClass}>Section</SectionTitle>);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toHaveClass(customClass);
    });
  });

  describe('CardTitle', () => {
    it('renders with children', () => {
      render(<CardTitle>Card</CardTitle>);
      const heading = screen.getByRole('heading', { level: 3, name: /card/i });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveClass('text-2xl', 'font-bold', 'text-gray-800');
    });

    it('renders with title prop', () => {
      render(<CardTitle title="Card" />);
      const heading = screen.getByRole('heading', { level: 3, name: /card/i });
      expect(heading).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const customClass = 'custom-class';
      render(<CardTitle className={customClass}>Card</CardTitle>);
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toHaveClass(customClass);
    });
  });

  describe('SubTitle', () => {
    it('renders with children', () => {
      render(<SubTitle>Sub</SubTitle>);
      const heading = screen.getByRole('heading', { level: 4, name: /sub/i });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveClass('text-lg', 'font-semibold', 'text-gray-800');
    });

    it('renders with title prop', () => {
      render(<SubTitle title="Sub" />);
      const heading = screen.getByRole('heading', { level: 4, name: /sub/i });
      expect(heading).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const customClass = 'custom-class';
      render(<SubTitle className={customClass}>Sub</SubTitle>);
      const heading = screen.getByRole('heading', { level: 4 });
      expect(heading).toHaveClass(customClass);
    });
  });
}); 