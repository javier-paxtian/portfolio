import React from "react";

const Card = (props) => {
    const { children, pointer = false, dark = false } = props
    return <>
        <div className={`rounded  shadow-lg p-3 bg-white hover:bg-slate-50 ${dark && 'bg-slate-950 text-white hover:bg-slate-900'} ${pointer && 'cursor-pointer'}`}>
            {children}
        </div>
    </>
}

export default Card