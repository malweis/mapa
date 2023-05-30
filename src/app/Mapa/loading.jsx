"use client"
import React from 'react'

function loading() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div
          aria-label="loading-skeleton"
          className="w-full h-full bg-slate-200 animate-pulse"
        ></div>
    </div>
  )
}

export default loading