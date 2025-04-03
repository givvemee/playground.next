import React, { useEffect } from "react";

function TimerTest() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("5초 후에 실행");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <div>타이머 테스트</div>;
}

export default TimerTest;
