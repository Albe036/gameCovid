import React, { useState, useEffect } from 'react';
import icons from '../controllers/Icons';
import Image from './image';
import Title from './title';
import Back from './back';




const Soup = () =>{
    const [seconds, setSeconds] = useState(new Date().getSeconds() - 1);
    const [ScoreSec, setSec] = useState(0)

    function timer(){
        setSeconds(new Date().getSeconds());
    };


/*     function iniciar() {
       let intervalo =  setInterval(timer, 1000);
       return intervalo
    }
    
    function detener() {
        let intervalo = iniciar()
        clearInterval(intervalo)
    } */

    useEffect(() => {
        setInterval(timer,1000);
    }, []);

    useEffect(() => {
        setSec(ScoreSec + 1);
    }, [seconds]);

    let completed = [];
    let almacen = [];
    return(
        <div>
            <Title/>
            <div className="contenedorSoup">
                <div className="StyleTime">
                    <h2>Time / Tiempo</h2>
                    <h1>{ScoreSec}</h1>
               {/*      <button onClick={iniciar}>Iniciar</button>
                    <button onClick={detener}>detener</button> */}
                </div>
                <div className="styleCuadro">
                    {icons.map(e => <Image
                                        key={e.id}
                                        image = {e.src}
                                        almacen = {almacen}
                                        completed = {completed}
                                        ident = {e.ident}
                                        />)}
                    
                </div>
                <div className="StyleScore">
                    <h3>Albeiro: 30 segundos</h3>
                    <h3>Albeiro: 30 segundos</h3>
                    <h3>Albeiro: 30 segundos</h3>
                    <h3>Albeiro: 30 segundos</h3>
                    <h3>Albeiro: 30 segundos</h3>
                    <h3>Albeiro: 30 segundos</h3>
                    <h3>Albeiro: 30 segundos</h3>
                    <h3>Albeiro: 30 segundos</h3>
                    <h3>Albeiro: 30 segundos</h3>
                    <h3>Albeiro: 30 segundos</h3>
                </div>
            </div>
            <Back/>
        </div>
    )    
};

export default Soup;

