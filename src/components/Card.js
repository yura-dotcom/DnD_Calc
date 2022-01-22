import React from "react";
import { useDrag } from "react-dnd";

export default function Card({ type, text }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type, text },
    type: type,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })

  return (
    <div className="card" ref={dragRef} style={{opacity}}>
      {text}
    </div>
  )
}