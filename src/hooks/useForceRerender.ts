import { useState, useCallback } from 'react';

const useForceRerender = (): [number, () => void] => {
  const [key, setKey] = useState(0);

  const forceRerender = useCallback(() => {
    setKey(prevKey => prevKey + 1);
  }, []);

  return [key, forceRerender];
};

export default useForceRerender;