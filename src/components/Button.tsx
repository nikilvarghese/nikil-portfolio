import React from 'react';
import { cn } from '../utils/cn';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type ButtonAsAnchor = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant = 'primary', isLoading, children, href, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]';
    
    const variants = {
      primary: 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-950 focus:ring-slate-500 shadow-xs border border-transparent',
      secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-brand-surface-dark dark:hover:bg-brand-surface-hover-dark dark:text-brand-text-primary-dark border border-slate-200 dark:border-brand-border-dark focus:ring-slate-500',
      outline: 'border border-brand-border-light dark:border-brand-border-dark bg-transparent text-brand-text-secondary-light dark:text-brand-text-secondary-dark hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-dark focus:ring-slate-500'
    };

    const combinedClasses = cn(baseStyles, variants[variant], className);

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClasses}
        disabled={isLoading || (props as React.ButtonHTMLAttributes<HTMLButtonElement>).disabled}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
