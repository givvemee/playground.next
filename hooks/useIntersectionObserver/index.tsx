/**
 * Infinite Scroll
 */

import { RefObject, useEffect } from "react";

/**
 * @param target 참조 html element
 * @param onIntersect
 * @param enabled 더 스크롤이 가능한 상황인가
 *
 */

type IntersectionObserverType = {
  target: RefObject<HTMLDivElement>;
  onIntersect: () => void;
  enabled: boolean;
};

export const useIntersectionObserver = ({
  target,
  onIntersect,
  enabled = true,
}: IntersectionObserverType) => {
  useEffect(() => {
    if (!enabled || !target.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // run onIntersect after threshold is 1, 지연 0.5초
          setTimeout(() => {
            onIntersect();
          }, 500);
        }
      },
      {
        root: null, // based on viewport
        rootMargin: "0px",
        threshold: 1.0, // this means target element should be shown up 100% in the screen...
      }
    );

    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [target, onIntersect, enabled]);
};
