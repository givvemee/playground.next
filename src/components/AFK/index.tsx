import InactivityDetector from "./InactivityDectector";
import TimerTest from "./test";

export default function AFK() {
  // Away From Keyboard, 사용자의 움직임이 감지되지 않으면 특정 행위를 하도록 
  return (
    <div className="App">
      {TimerTest()}
      <InactivityDetector />
    </div>
  );
}
