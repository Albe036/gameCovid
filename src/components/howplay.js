import React from 'react';
import Back from './back';


const Howplay = () =>{
    return(
        <div className="styleHow">
            <h1>HOW TO PLAY | COMO JUGAR</h1>
            <div>
                <h4>
                    1. We have 15 repeated images that total 30, the objective of the game is to find the same pair of the selected image.<br/>
                    <br/>
                    2. After 3 seconds the image will close again.<br/>
                    <br/>
                    3. Having 2 different images open and clicking on a third will restart the comparison, this third   being compared to the fourth you open.<br/>
                    <br/>
                    4. The game will start by pressing the PLAY key.<br/>
                    <br/>
                    5. Time will start counting and you should be as fast as possible to find each pair.<br/>
                    <br/>
                    6. When you find all the pairs the game will end and you will know your time and position on the SCORE list.<br/>
                </h4>
            </div>
            <div>
                <h4>
                    1.	Tenemos 15 imágenes repetidas que en total dan 30, el objetivo del juego es buscar la pareja igual de la imagen seleccionada.<br/>
                    <br/>
                    2.	Pasado 3 segundos la imagen volverá a cerrarse.<br/>
                    <br/>
                    3.	Al tener 2 imágenes diferentes abiertas y pulsar en una tercera reiniciara la comparación siendo esta tercera comparada con la cuarta que abras.<br/>
                    <br/>
                    4.	El juego iniciara al presionar la tecla PLAY.<br/>
                    <br/>
                    5.	El tiempo empezara a contar y deberías ser lo más rápido posible para encontrar cada pareja.<br/>
                    <br/>
                    6.	Al encontrar todas las parejas el juego terminara y conocerás tu tiempo y posición en la lista de PUNTAJES.<br/>
                </h4>       
            </div>
            <Back/>
        </div>
    )
}


export default Howplay;