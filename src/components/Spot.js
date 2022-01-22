import React from "react";
import { useDrop } from "react-dnd";

export default function Spot({ type, text, spot, handleDrop }) {
  // console.log(12)
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: type,
    drop: (item) => {
      handleDrop(spot, item)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  let backgroudColor = '#f2f2f2';
  if (canDrop) backgroudColor = '#3db897';
  if (isOver) backgroudColor = '#4bdcb5';

  return (
    <div className="spot" ref={dropRef} style={{ backgroudColor }}>
      {text}
    </div>
  )

}