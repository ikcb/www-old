// code taken from https://stackoverflow.com/a/61127960/11613622 under CC BY-SA 4.0

import { useCallback, useEffect } from 'react';

export const useDebouncedEffect = (effect, delay, deps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};