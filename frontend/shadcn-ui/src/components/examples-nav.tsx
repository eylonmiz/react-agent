import { Link, useLocation } from 'react-router-dom';

import { cn } from '../lib/utils';
import { ScrollArea, ScrollBar } from '../components/ui/scroll-area';

const examples = [
  {
    name: 'Dashboard',
    href: '/examples/dashboard',
  },
  {
    name: 'Cards',
    href: '/examples/cards',
  },
  {
    name: 'Playground',
    href: '/examples/playground',
  },
  {
    name: 'Music',
    href: '/examples/music',
  },
  {
    name: 'Authentication',
    href: '/examples/authentication',
  },
];

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const { pathname } = useLocation();

  return (
    <ScrollArea>
      <div className={cn('mb-4 flex items-center', className)} {...props}>
        {examples.map((example) => (
          <Link
            to={example.href}
            key={example.href}
            className={cn(
              'flex px-4 font-medium',
              pathname === example.href ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            {example.name}
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}
