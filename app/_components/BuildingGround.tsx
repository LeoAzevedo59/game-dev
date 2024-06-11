import React from 'react'

type BuildingGroundProps = {
  style: string
  label: string
}

export function BuildingGround({ style, label }: BuildingGroundProps) {
  return (
    <button className={`w-28 h-28 border border-sky-500 absolute ${style} rounded-full`}>
      <div className='flex items-center justify-center w-full h-full'>
        <h1 className='text-lg'>{label}</h1>
      </div>
    </button>
  )
}