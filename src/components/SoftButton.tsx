/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '../lib/utils';

export interface SoftButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string; 
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export function SoftButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}: SoftButtonProps) {
  const variants = {
    primary: 'bg-ankahe-accent hover:bg-ankahe-accent-dark text-white rounded-sm',
    secondary: 'bg-ankahe-surface border border-ankahe-border text-ankahe-text hover:bg-ankahe-bg rounded-sm',
    ghost: 'bg-transparent text-ankahe-muted hover:bg-ankahe-surface hover:text-ankahe-text rounded-sm',
    danger: 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-100'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
