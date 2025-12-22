import { useEffect, useState } from "react";

function Traffic() {
  const [activeIndex, setActiveIndex] = useState(0);

  const colorObj = [
    { color: "green", delay: 5000 },
    { color: "yellow", delay: 2000 },
    { color: "red", delay: 5000 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % colorObj.length);
    }, colorObj[activeIndex].delay);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div
      style={{
        backgroundColor: colorObj[activeIndex].color,
        width: "100px",
        height: "100px",
        borderRadius: "50%",
      }}
    />
  );
}

export default Traffic;
