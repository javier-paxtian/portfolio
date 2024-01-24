import React from "react";

const Card = (props) => {
    const { children, pointer = false, dark = false, bgBlack=false, bgWhite=false } = props
    return <>
        <div className={` ${bgBlack && 'bg-black' } ${bgWhite && 'bg-white'} rounded shadow-lg p-3  hover:bg-slate-50 ${dark && 'bg-slate-950 text-white hover:bg-slate-900'} ${pointer && 'cursor-pointer'} `}>
            {children}
        </div>
    </>
}

export default Card