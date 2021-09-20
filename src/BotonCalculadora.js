import styled from 'styled-components';
import React from 'react';

//Cada botón recibe como parámetro el símbolo del botón y la función callBack para pasar
//luego el valor del símbolo a la calculadora.
const Boton = ({ className, simbolo, callBack }) => {
  console.log("renderiza botón");
  return (
      <span className={ className } onClick={() => callBack( simbolo )} >{ simbolo }</span>
  );
};

//El float, el height, el width y el background-color varían según el botón.
//Todos los demás atributos son iguales el resto de los botones.
const BotonCalculadora = styled(Boton)`
  
////TODA ESTA PARTE ESTOY SEGURO QUE SE PUEDE HACER MÁS PROLIJAMENTE
  float: ${props => ( props.simbolo === '+' || props.simbolo === '=' ) ? 'right' : 'left'};
  height: ${props => ( props.simbolo === 'MS' || props.simbolo === 'MR' || props.simbolo === 'MC' ) ? '60px' : '87px'};
  height: ${props => ( props.simbolo === '+' || props.simbolo === '=' ) ? '186px' : '-'};
  width: ${props => ( props.simbolo === 'MS' || props.simbolo === 'MR' || props.simbolo === 'MC' ) ? '120px' : '87px'};
  background-color: #D3D3D3;
  background-color: ${props => ( props.simbolo === 'MS' || props.simbolo === 'MR' || props.simbolo === 'MC' ) ? '#555555' : '-'};
  background-color: ${props => ( props.simbolo === '=' ) ? '#0077AA' : '-'};
  background-color: ${props => ( props.simbolo === 'C' ) ? '#BB2200' : '-'};
////

  margin:5px;
  border-radius: 10px;
  border-color: #92e23b;
  border: 1px solid #000;
 
  font-size: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  //CUANDO EL CURSOR PASA POR ARRIBA CAMBIA EL COLOR DEL BOTÓN
  &:active{
    background-color: #E5E5E5;
  }

  //AL PASAR EL CURSOR POR ARRIBA SE TRANSFORMA EN UNA MANITO
  &:hover{
    cursor: pointer;
  }

  //ESTO DE ABAJO ES PARA QUE NO SE PUEDA SELECCIONAR EL TEXTO DEL BOTÓN, SEGÚN EL NAVEGADOR
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */

`;

export default React.memo(BotonCalculadora);