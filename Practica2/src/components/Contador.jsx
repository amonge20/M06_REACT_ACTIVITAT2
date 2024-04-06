import React, {useState} from 'react';
import './styles/Contador.css'

const Button = ({ onClick, isClick }) => {
    return (
        <button className={isClick ? 'btnClick' : 'btnReiniciar'} onClick={onClick}>{text}</button>
    )
};

const Contador = () => {
    const [numeroClicks, setNumeroClicks] = useState(0);

    const incrementaNumero = () => {
        setNumeroClicks(numeroClicks + 1);
        console.log("Más uno");
    };

    const reiniciarNumero = () => {
        setNumeroClicks(0);
        console.log("Se ha reiniciado");
    };

    return (
        <div>
            <h2 className='CuadroContador'>{numeroClicks}</h2>
            <button className='btnClick' onClick={incrementaNumero} isClick={true}>Clic</button>
            <button className='btnReiniciar' onClick={reiniciarNumero} isClick={false}>Reinciar</button>
        </div>
    );
};

export default Contador;

