import * as React from 'react';
import { useLocation } from 'react-router-dom';

export function StyleSwitcher() {
  const location = useLocation();
  const segments = location.pathname.split('/');

  React.useEffect(() => {
    document.body.removeAttribute('data-section');

    const section = segments.at(-1);
    if (section && typeof window !== 'undefined') {
      document.body.setAttribute('data-section', section);
    }
  }, [segments]);

  return null;
}
