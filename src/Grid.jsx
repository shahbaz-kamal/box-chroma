import React, { useState } from "react";

const Grid = () => {
  const size = 3; // 3x3 grid
  const [grid, setGrid] = useState(Array(size * size).fill());
  const [order, setOrder] = useState([]);
  console.log(grid);
  return (
    <div className="grid grid-cols-3 "> 
      {grid.map((box, index) => (
        <div key={index} className="border-2 border-gray-200 w-full h-[200px]"></div>
      ))}
    </div>
  );
};

export default Grid;
