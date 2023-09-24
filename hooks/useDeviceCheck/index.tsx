'use client';
import { useEffect, useState } from 'react';


/**
 *
 * @param 
 * userAgent 로 디바이스 체크
 */


const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('Another Device');

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    if (userAgent.match(/iPhone|iPad|iPod/i)) {
      setDeviceType('iPhone');
    } else if (userAgent.match(/Android/i)) {
      setDeviceType('Android');
    }
  }, []);

  return deviceType;
};

export default useDeviceType;
