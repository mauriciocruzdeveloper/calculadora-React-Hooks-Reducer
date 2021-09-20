import styled from 'styled-components';

//Corto la cadena de caracteres a 12 y 17 cifras para que entre en la pantalla
const Display = ({ className, texto }) => {
    console.log('renderiza display');
    const [ display1, display2 ] = texto;
    return (
      <div className = { className }  >
        <div className = 'display1' >{ display1.substring(0, 12) }</div>
        <div className = 'display2' >{ display2.substring(0, 17) }</div>
      </div>
    );
  };

const DisplayCalculadora = styled(Display)`
    text-align: right;
    box-sizing: border-box;
    padding: 0px 7px;
    margin-bottom: 20px;
    width: 400px;
    height: 140px;
    border-radius: 10px;
    background-color: #3C412C;

    .display2 {
      font-size: 40px;
      color: #74821A;
    }

    .display1 {
      font-size: 60px;
      color: #A8C64E;
    }

    .display1, display2 {
      height: 70px;
    }
`;

export default DisplayCalculadora;