export const reducerCalculo = (estado = [], action) => {
    //Esta es la función reducer. Aquí está el núcleo de la lógica de la calculadora.

    const { cache1, cache2, display1, display2 } = estado;

    switch ( action.type ) {
        case 'presionaOperador':
            return {
                cache1: '',
                cache2: cache2 + display1 + action.payload,
                display1: display1,
                display2: cache2 + display1 + action.payload
            };

        case 'presionaIgual':
            let resultado = '';
            //Uso try/catch porque si eval evalua una operación si el segundo parámetro da error. En ese caso capturo el error
            //y muestro la palabra "error" en el display.            
            try{
                //uso la función "replace" para sustituir el símbolo x por el * para que eval funcione
                resultado = eval( display2.replace('x','*') + cache1 ).toString();
            }catch{
                resultado = "error";
            };

            return {
                display1: resultado,
                cache1: '',
                cache2: '',
                display2: display2 + cache1
            };
            
        case 'presionaClear':
            return{
                //Cuando presiono Clear se inicializa el estado.
                cache1: '',
                cache2: '',
                display1: '',
                display2: ''
            };

        case 'presionaMS':
            //Guardo el número que está escrito en display1 en el local storage para que no desaparezca al refrescar la página ni tampoco al presionar Clear.
            localStorage.setItem('memoria', JSON.stringify( estado.display1 ));
            return estado;
            
        case 'presionaMR':
            const memoria = JSON.parse(localStorage.getItem('memoria')) || [];
            return {
                ...estado,
                display1: memoria,
                cache1: memoria,
                display2: cache2
            };

        case 'presionaMC':
            localStorage.setItem('memoria', JSON.stringify( '' ));
            return estado;
            
        case 'presionaBoton':
            return {
                cache1: cache1 + action.payload,
                cache2: cache2,
                display1: cache1 + action.payload,
                display2: cache2
            }

        default:
            return estado;
    }
}