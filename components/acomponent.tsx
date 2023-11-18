import React, { useState } from "react";
import CComponent from "./ccomponent";
import BComponent from "./bcomponent";
/*
export const AComponent: React.FC = () => {
    const [count,setCount]=useState(0);

    const handleClick=():void=>{
        console.log('click');
        setCount((pre)=>pre+1);
    }

    console.log('A is update!');
    return<>
        <div>count is {count}</div>
        <BComponent onClick={handleClick} />
        <CComponent />
    </>
};
}
*/

export default function AComponent() {
    "use client"
    const [count,setCount]=useState(0);

    const handleClick=():void=>{
        console.log('click');
        setCount((pre)=>pre+1);
    }

    console.log('A is update!');
    return<>
        <div>count is {count}</div>
        <BComponent onClick={handleClick} />
        <CComponent />
    </>
};

