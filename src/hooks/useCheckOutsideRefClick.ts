import { useEffect, useState } from 'react';

const useCheckOutsideRefClick = (ref: HTMLElement) => {
  const [isRefOpen, setIsRefOpen] = useState(false);

  useEffect(() => {
    function checkClickOutsideRef(e: MouseEvent) {
      if (e.target !== ref) {
        setIsRefOpen(false);
      }
    }

    document.addEventListener('click', checkClickOutsideRef);

    return () => {
      document.removeEventListener('click', checkClickOutsideRef);
    };
  }, [ref]);

  return { isRefOpen };
};

export default useCheckOutsideRefClick;
