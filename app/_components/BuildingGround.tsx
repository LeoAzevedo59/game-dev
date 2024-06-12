import React from 'react'
import { Stopwatch } from './Stopwatch'

type BuildingGroundProps = {
  style: string
  label: string
}

export function BuildingGround({ style, label }: BuildingGroundProps) {
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1); // 1 hora a partir do startDate

  function handleUpgrade() {
    //
  }

  return (
    <button className={`w-28 h-28 border border-sky-500 absolute ${style} rounded-full`}>
      <div className='flex items-center justify-center w-full h-full'>
        <h1 className='text-lg'>{label}</h1>
      </div>
      <div className='flex justify-between'>
        <button onClick={handleUpgrade}> + </button>
        <button > - </button>
        <span>(1)</span>
      </div>
      <Stopwatch startDate={startDate} endDate={endDate} />
    </button>
  )
}