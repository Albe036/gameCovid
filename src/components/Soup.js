import React from 'react';
import icons from '../controllers/Icons';
import Picture from './picture';




const Soup = () =>{

    let pic_1 = ""
    let pic_2 = ""

    return(
        <div className="Soup">
            {icons.map((e) => <Picture
                                icons = {e}
                                key = {e.id}
                                pic_1 = {pic_1}                     
                                pic_2 = {pic_2}                     
                            />
                    )}
        </div>
)};

export default Soup;

