import { useEffect, useState } from "react";
import useInterval from "./useInterval"; 

export const useInactivityDetector = () => {
  const [inactivity, setInactivity] = useState(1);

  useInterval(() => {
    setInactivity((prev) => prev + 1);
  }, 3000);

  useEffect(() => {
    const handleActivity = () => {
      setInactivity(1);
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
    };
  }, []);

  return { inactivity };
};

export default useInactivityDetector;
