import React, { useState } from "react";

const Modal = (props) => {
    const { children, show = false } = props
    return <>
        {show && <>
            <div className="absolute top-0 left-0 w-full h-screen bg-slate-300 bg-opacity-50 z-10 flex justify-center items-center">
                {children}
            </div>
        </>}
    </>
}

export default Modal