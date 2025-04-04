import React, { useState } from "react";

const Grid = () => {
  const [defaultArray, setDefaultArray] = useState(Array(9).fill("white"));
  const [order, setOrder] = useState([]);

  const handleClick = (index) => {
    if (!order.includes(index)) {
      const newArray = [...defaultArray];
      newArray[index] = "green";
      setDefaultArray(newArray);

      setOrder([...order, index]);
      if (order.length + 1 === 9) {
        orangeSequence([...order, index]);
      }
    }
  };

  const orangeSequence = (order) => {
    order.forEach((idx, idxForThisLoop) => {
      setTimeout(() => {
        setDefaultArray((prev) => {
          const newArray = [...prev];
          newArray[idx] = "orange";
          return newArray;
        });
      }, idxForThisLoop * 1000);
    });
  };
  return (
    <div className="grid grid-cols-3 ">
      {defaultArray.map((backgroundColor, index) => (
        <div
          onClick={() => handleClick(index)}
          style={{ backgroundColor: backgroundColor }}
          key={index}
          className="border-2 border-gray-200 w-full h-[200px] flex items-center justify-center cursor-pointer"
        >
          <p className="text-white text-2xl font-bold">
            {order.includes(index) ? order.indexOf(index) + 1 : ""}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
