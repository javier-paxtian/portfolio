import React, { useEffect, useState } from "react";
import BotonCalculadora from "./components/botonCalculadora.component";


const Calculadora = () =>{

  const [valor, setValor] = useState("");
  const [valorSumado, setvalorSumado] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [ultimoValor, setUltimoValor]= useState("");


  // useEffect(() => {

  //     setvalorSumado(valorSumado=>valorSumado+valor)
  //     setUltimoValor(valor)
  // }, [valor]);


    // const handleButtonClick = (value) => {

      
    //   if (['+', '-', '*', '/'].includes(ultimoValor) && ['+', '-', '*', '/'].includes(value)) {
    //     console.log('Ambos son operadores');
    //     setvalorSumado(valorSumado => valorSumado.slice(0, -1));
    //     setUltimoValor(value);
    //     setvalorSumado(valorSumado=>valorSumado+value);
    //   }else{
    //     console.log('se suma')
    //     setvalorSumado(valorSumado=>valorSumado+value);
    //     setUltimoValor(value);
    //   }
    // };
    
    const handleButtonClick = (value) => {
      if (value === "=") {
        try {
          const resultado = eval(valorSumado);
          setvalorSumado(resultado.toString());
          setUltimoValor(resultado.toString());
        } catch (error) {
          console.error('Error al evaluar la expresión:', error);
        }
      } else if (value === "c") {
        setvalorSumado("0");
        setUltimoValor("");
      } else if (value === "<-") {
        setvalorSumado((prevValorSumado) => prevValorSumado.slice(0, -1));
      } else {
        const esOperador = ['+', '-', '*', '/'].includes(value);
        const ultimoValorEsOperador = ['+', '-', '*', '/'].includes(ultimoValor);
    
        if (esOperador && ultimoValorEsOperador) {
          console.log('Ambos son operadores');
          setvalorSumado((prevValorSumado) => prevValorSumado.slice(0, -1) + value);
        } else {
          console.log('se suma');
          setvalorSumado((prevValorSumado) => prevValorSumado === "0" ? value : prevValorSumado + value);
        }
    
        setUltimoValor(value);
      }
    };
    
    
  useEffect(() => {
    setInputValue(valorSumado);
  }, [valorSumado]);


    return <>
        
            <main className="bg-gray-700 h-full min-h-screen flex items-center justify-center">
            

              <div className="">
              
              <div className="mb-4 mt-4">
              
                <input type="text" value={inputValue} readOnly placeholder="" className="w-full h-[70px] "/>

              </div>
                    
              <div className="grid grid-rows-4 grid-flow-col gap-4 ">
                  
                  {['+', 7, 4, 1, '-', 8, 5, 2, '/', 9, 6, 3, '*', 'c', '=',0,'<-',].map((value, index) => (
                    <BotonCalculadora key={index} funcion={()=>{handleButtonClick(value)}}> {value} </BotonCalculadora>
                  ))}

                  
                </div>
              </div>

                
            </main>
        </>
}


export default Calculadora