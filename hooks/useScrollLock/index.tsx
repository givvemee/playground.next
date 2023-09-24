'use client';
import { useEffect } from 'react';

/**
 *
 * @param isActive
 * isActive 의 상태에 따라 body scroll
 */

const useScrollLock = (isActive?: boolean) => {
  useEffect(() => {
    if (!isActive) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isActive]);
};

export default useScrollLock;
