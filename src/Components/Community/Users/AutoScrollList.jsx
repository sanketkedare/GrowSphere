import React, { useEffect, useRef, useState } from "react";

import UserCart from "./UserCart";

const AutoScrollList = ({ data, title }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const scrollRef = useRef(null);


  useEffect(() => {
    if (data.length > 4) {
      const container = scrollRef.current;
      const scroll = () => {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; // Reset scroll
        } else {
          container.scrollBy({ left: 1, behavior: "smooth" });
        }
      };

      const interval = setInterval(scroll, 20); // Adjust speed as needed
      return () => clearInterval(interval);
    }
  }, [data]);

  const combinedData = data.length > 4 ? [...data, ...data] : data;

  return (
    <div className="my-4 p-4 rounded-xl">
      <p className="text-xl font-bold py-2">{title.toUpperCase()}</p>
      <div
        className="flex overflow-x-auto gap-4 w-full scrollbar-hide"
        ref={scrollRef}
      >
        {combinedData.map((item, index) => (
          <UserCart key={index} item={item} hoverIndex={hoverIndex} setHoverIndex={setHoverIndex} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollList;
