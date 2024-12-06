import { useEffect, useState } from 'react';

export function useSvgAnimation(className = 'loaded', delay = 50): string | null {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded ? className : null;
}
