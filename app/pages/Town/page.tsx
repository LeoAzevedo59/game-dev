'use client'
import { BuildingGround } from '@/app/_components/BuildingGround'
import React, { useRef, useState } from 'react'

export default function Town() {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [movedX, setMovedX] = useState(0);
  const [movedY, setMovedY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const ref = useRef(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
    setOffsetX(movedX);
    setOffsetY(movedY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dragging) {

      const moveX = offsetX + (e.clientX - startX)
      const moveY = offsetY + (e.clientY - startY)

      if (moveY < 0 || moveX < -480 || moveX > 1400) return

      setMovedX(moveX);
      setMovedY(moveY);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className='w-full h-screen flex items-center justify-center bg-orange-400'>
      <div
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className='bg-blue-200 w-[2000px] h-screen absolute overflow-hidden'
      >
        <div
          style={{ top: movedY, left: movedX }}
          className={`w-[960px] h-[600px] relative scale-100 border border-red-600 min-w-96`}
        >
          <BuildingGround label='Academy' style='' />
          <BuildingGround label='Barracks' style='top-[280px] left-[150px]' />
          <BuildingGround label='Town Hall' style='top-[280px] right-[150px]' />
        </div>
      </div>
    </div>
  );
}
