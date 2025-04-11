import { useEffect, useRef } from "react";

export const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);

  // 매 렌더마다 최신 callback을 저장
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // delay가 null이 아니면 interval을 생성
  useEffect(() => {
    if (delay !== null) {
      const tick = () => {
        savedCallback.current();
      };
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
