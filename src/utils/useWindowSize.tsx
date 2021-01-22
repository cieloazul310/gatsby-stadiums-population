import * as React from 'react';

export function useWindowSize() {
  const [size, setSize] = React.useState({ width: 600, height: 600 });
  React.useEffect(() => {
    if (window) {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      function handleResize() {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return size;
}
