import { ReactNode, HTMLAttributes } from 'react';

interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export default HeadlineProps;
