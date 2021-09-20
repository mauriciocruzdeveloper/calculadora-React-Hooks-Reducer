import { useCallback, useReducer } from "react";

//La función reducer la hice en otro archivo, también podría hacerla aquí dentro, pero me parece más prolijo así.
import { reducerCalculo } from "./reducerCalculo";

//Hago un hook para la funcionalidad de la calculadora.
//Este hook acepta el símbolo presionado y devuelve lo que se muestra en el display.
//Se puede reutilizar en cualquier calculadora, sólo hay que pasar el símbolo y devuelve el display.


export const useCalculadora = () => {

    const init = () => {
        return {
            //"cache1" y "cache2" las uso como auxiliares para los displays
            //"display1" y "display2" es lo que se termina mostrando en el display de la calculadora
            cache1: '',
            cache2: '',
            display1: '',
            display2: ''
        };
    };
        
    //Empleé useReducer porque, como dice el PowerPoint de Andres, es preferible en vez de useState
    //cuando se tiene una lógica compleja que involucra múltiples valores y además el estado actual
    //depende del anterior. También lo hice con useState, pero me parece mejor con useReducer.
    const [estado, dispatch] = useReducer(reducerCalculo, [], init);

    const { display1, display2 } = estado;

    const action = {
        type: '',
        payload: ''
    }

    //Acá empleo useCallback para que se memorice la función y, al pasarla como parámetro a los botones, éstos no se re-rendericen.
    //Si no lo hiciera, la función se volvería a crear cada vez que CalculadoraContenedor se renderiza, y al pasarla luego como parámetro
    //a los botones, éstos se re-renderizarían. Los botones están declarados como React.memo.
    const procesaSimbolo = useCallback(( simbolo ) => {
            //Según el símbolo presionado, se carga la acción correspondiente al dispatch del reducer.
            switch ( simbolo ) {
                case 'x':
                case '-':
                case '+':
                case '/':
                    //para el caso de x, -, + o / hago esto
                    action.type = 'presionaOperador';
                    action.payload = simbolo;
                    dispatch( action );
                    break;

                case '=': //Igual
                    action.type = 'presionaIgual';
                    dispatch( action ); 
                    break;

                case 'C': //Clear
                    action.type = 'presionaClear';
                    dispatch( action );
                    break;

                case 'MS': //Memory Storage
                    action.type = 'presionaMS';
                    dispatch( action );
                    break;

                case 'MR': //Memory Recall
                    action.type = 'presionaMR';
                    dispatch( action );
                    break;

                case 'MC': //Memory Clear
                    action.type = 'presionaMC';
                    dispatch( action );
                    break;

                default: //Símbolos algebraicos
                    action.type = 'presionaBoton';
                    action.payload = simbolo;
                    dispatch( action );
            };
        },
        []
    )

    //Uso toString para asegurarme que el display sea un string.
    //Compruebo que los display no superen determinado largo, si es así muestro el mensaje de overflow
    return [ 
        display1.toString().length > 12 ? 'OVERFLOW' : display1.toString(), 
        display2.toString().length > 17 ? 'OVERFLOW' : display2.toString(), 
        procesaSimbolo 
    ];

}