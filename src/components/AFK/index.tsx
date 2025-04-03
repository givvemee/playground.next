import InactivityDetector from "./InactivityDectector";
import TimerTest from "./test";

export default function AFK() {
  return (
    <div className="App">
      {TimerTest()}
      <InactivityDetector />
    </div>
  );
}
