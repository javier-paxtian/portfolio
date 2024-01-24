// botonCalculadora.component.jsx
import React from "react";



const BotonCalculadora = (props) => {
  const { children, funcion = ()=>{} } = props;
  return (
    <>
      <div className="bg-emerald-400 rounded shadow-lg hover:bg-emerald-500 w-[100px] h-[100px] flex items-center justify-center text-xl " onClick={funcion}>
        {children}
      </div>
    </>
  );
};

export default BotonCalculadora;
