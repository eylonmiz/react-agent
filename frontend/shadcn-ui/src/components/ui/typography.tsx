import React, { ReactNode } from 'react';
import cn from 'classnames';

interface TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subheading'
    | 'body'
    | 'list'
    | 'orderedList'
    | 'blockquote'
    | 'anchor'
    | 'item';
  align?: 'left' | 'center' | 'right';
  color?: 'primary' | 'secondary' | 'gray' | 'white';
  className?: string;
  children: ReactNode;
  href?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  align = 'left',
  color = 'primary',
  className,
  children,
  href,
}) => {
  const classNames = cn(
    'font-medium',
    'leading-tight',
    'tracking-tight',
    {
      'text-4xl': variant === 'h1',
      'text-3xl': variant === 'h2',
      'text-2xl': variant === 'h3',
      'text-xl': variant === 'h4',
      'text-lg': variant === 'h5',
      'text-base': variant === 'h6' || variant === 'subheading' || variant === 'body',
      'text-left': align === 'left',
      'text-center': align === 'center',
      'text-right': align === 'right',
      'text-primary': color === 'primary',
      'text-secondary': color === 'secondary',
      'text-gray': color === 'gray',
      'text-white': color === 'white',
    },
    className
  );

  switch (variant) {
    case 'h1':
      return <h1 className={classNames}>{children}</h1>;
    case 'h2':
      return <h2 className={classNames}>{children}</h2>;
    case 'h3':
      return <h3 className={classNames}>{children}</h3>;
    case 'h4':
      return <h4 className={classNames}>{children}</h4>;
    case 'h5':
      return <h5 className={classNames}>{children}</h5>;
    case 'h6':
      return <h6 className={classNames}>{children}</h6>;
    case 'subheading':
      return <p className={classNames}>{children}</p>;
    case 'body':
      return <p className={classNames}>{children}</p>;
    case 'anchor':
      return (
        <a className={classNames} href={href}>
          {children}
        </a>
      );
    case 'item':
      return <li className={classNames}>{children}</li>;
    case 'list':
      return <ul className={classNames}>{children}</ul>;
    case 'orderedList':
      return <ol className={classNames}>{children}</ol>;
    case 'blockquote':
      return <blockquote className={classNames}>{children}</blockquote>;
    default:
      return <p className={classNames}>{children}</p>;
  }
};

export { Typography };
