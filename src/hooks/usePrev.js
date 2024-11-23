// always use 'use' prefix with your custom hook
// we should named export for custom hooks

import { useEffect, useRef } from "react";

export const usePrev = (value) => {
  const prevValue = useRef(value);
  // we will update the value once my component
  // is rendered
  useEffect(()=>{
    prevValue.current = value;
  },[value])
  // prevValue.current = value; /// it's updating prevValue on every re-render
  return prevValue.current;
};
