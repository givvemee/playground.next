import React, { useEffect, useRef } from "react";

function InactivityDetector() {
  const timerRef = useRef(null);

  // 이벤트가 발생할 때마다 타이머를 초기화하는 함수
  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // 5초 동안 활동이 없으면 아래의 동작 수행
    timerRef.current = setInterval(() => {
      console.log("사용자 활동이 5초간 감지되지 않았습니다!");
      // 여기에서 원하는 동작을 수행하면 됩니다.
    }, 60000);
  };

  useEffect(() => {
    // 마우스와 키보드 이벤트를 감지하는 핸들러
    const handleActivity = () => {
      resetTimer();
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);

    // 컴포넌트가 마운트되자마자 타이머 시작
    resetTimer();

    // cleanup 함수: 컴포넌트 언마운트 시 이벤트 리스너 제거 및 타이머 클리어
    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>활동 감지 컴포넌트</h1>
      <p>마우스나 키보드 이벤트가 없으면 동작이 발생합니다.</p>
    </div>
  );
}

export default InactivityDetector;
