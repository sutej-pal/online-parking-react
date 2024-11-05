import { useRef, useEffect, useCallback } from "react";

const Filters = ({
  isCardVisible,
  setCardVisibility,
}: {
  isCardVisible: boolean;
  setCardVisibility: Function;
}) => {
  const filtersRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      console.log("Hi"); // This will log when clicking outside
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node)
      ) {
        setCardVisibility(false);
      }
    },
    [setCardVisibility]
  );

  useEffect(() => {
    if (isCardVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on component unmount or visibility change
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, isCardVisible]);

  return (
    <div className="filters-card" ref={filtersRef}>
      {" "}
      {/* Attach ref here */}
      Filters Section
    </div>
  );
};

export default Filters;
