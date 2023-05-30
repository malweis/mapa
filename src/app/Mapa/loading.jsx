"use client"
import React from 'react'

function loading() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
    </div>
  )
}

export default loading