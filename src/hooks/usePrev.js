// always do named export for custom hooks / utility fns

import { useRef } from "react";

// always start custom hook with 'use'

export const usePrev = (value) => {
  const ref = useRef(value);
  return ref.current;
};
