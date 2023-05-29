"use client"
import dynamic from 'next/dynamic'
import React from 'react'

function page() {

  const DynamicMap=  dynamic(() => import('../components/Mapa'),{ssr:false})

  return (
    <>
      <DynamicMap/>
    </>
  )
}

export default page