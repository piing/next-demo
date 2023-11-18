'use client'
import React from 'react'

type Props = {
    onClick:()=>void
}

export default function BComponent(props: Props) {
    "use client"
    const handleClick=():void=>{
        props.onClick && props.onClick()
    }
    console.log('B is update!');
  return <button onClick={handleClick}>click me!</button>
}