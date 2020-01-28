import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage();

  useEffect(() => {
    someValue ? document.body.className = 'dark-mode' : document.body.className = '';
  }, [someValue]);

  return [someValue, setSomeValue];
};
