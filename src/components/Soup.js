import React from 'react';
import icons from '../controllers/Icons';
import Image from './image';
import Title from './title';
import Back from './back';




const Soup = () =>{

    let completed = [];
    let almacen = [];
    return(
        <div>
            <Title/>
            <div className="styleCuadro">
                {icons.map(e => <Image
                                    key={e.id}
                                    image = {e.src}
                                    almacen = {almacen}
                                    completed = {completed}
                                    ident = {e.ident}
                                />)}
                
            </div>
            <Back/>
        </div>
    )    
};

export default Soup;

