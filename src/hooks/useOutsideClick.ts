import { RefObject, useEffect } from "react";

const useOutsideClick = (
  elementRef: RefObject<HTMLElement>,
  handler: (value: boolean) => void
) => {
  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      if (!elementRef.current) {
        return;
      }
      if (!elementRef.current.contains(e.target as Node)) {
        handler(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [elementRef, handler]);
};

export default useOutsideClick;
