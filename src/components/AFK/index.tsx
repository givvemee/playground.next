import InactivityDetector from "./InactivityDectector";
import "./styles.css";
import TimerTest from "./test";

export default function AFK() {
  return (
    <div className="App">
      {TimerTest()}
      <InactivityDetector />
    </div>
  );
}
