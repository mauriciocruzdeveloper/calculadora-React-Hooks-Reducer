import BotonCalculadora from './BotonCalculadora';
import styled from 'styled-components';
import DisplayCalculadora from './DisplayCalculadora';
import { useCalculadora } from './useCalculadora';

//EN ESTA CALCULADORA TRATÉ DE USAR VARIOS HOOKS, UNO DE LOS QUE ENSEÑARON EN CADA CLASE: 
//EL CUSTOM HOOK, EL USECALLBACK Y EL USEREDUCER

const Calculadora = ({ className }) => {

    console.log("renderiza calculadora");

    //Hice un hook personalizado para que la funcionalidad esté encapsulada en él,
    //luego puedo usar el mismo hook para cualquier calculadora.
    const [ display1, display2, procesaSimbolo ] = useCalculadora()

    //"simbolos" es un array donde tengo todos los simbolos, uno por cada botón. Por cada símbolo voy a crear un botón empleando la función map().
    //"MS" es Memory Storage (almacena el número en memoria). "MR" es Memory Recall (devuelve el número). "MC" es Memory Clear (borra la memoria)
    const simbolos = ['MS','MR','MC','C','/','x','-','7','8','9','+','4','5','6','1','2','3','=','0','.',' '];

    //aquí dentro está el display y la colección de botones que se ordenan automáticamente
    return ( 
        <div className = { className }>
            <DisplayCalculadora texto = { [ display1, display2 ] }/>
            { 
                simbolos.map(
                    simb => ( <BotonCalculadora key={ simb } className='' simbolo={ simb } callBack={ procesaSimbolo }/> )
                )
            }
        </div>
    );
}

const CalculadoraContenedor = styled( Calculadora )`
    display: block;
    margin: 0 auto;
    padding: 20px;
    background-color: grey;
    width: 396px;
    height: 730px;
    border-radius: 20px;
`;

export default CalculadoraContenedor;