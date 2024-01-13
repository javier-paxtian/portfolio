import React from "react";

const CardBtn = (props) => {
    const { children } = props
    return <>
        <div className="rounded  shadow-lg p-3 bg-white hover:bg-slate-50">
            {children}
        </div>
    </>
}

export default CardBtn