import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouncedVal, setDebouncedVal] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);
    return () => clearTimeout(id);
  });
  return debouncedVal;
};

export default useDebounce;
