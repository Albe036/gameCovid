import React, { Fragment, useState } from 'react';
import hide from '../icons/search.svg'

const Image = (props) =>{
    const { image, ident, completed, almacen } = props;
    const [visible, setVisible] = useState(false)

    const almacenar = () =>{
        almacen.push(ident)
        setVisible(true)
        console.log(almacen)
        if(almacen.length === 2){
            if(almacen[0] === almacen[1]){
                completed.push(ident)
                almacen.pop()
                almacen.pop()
                console.log(`completados ${completed}`)
            }else{
                almacen.pop()
                almacen.pop()
            }
        }
        setTimeout(() => {
            const num = completed.find(e => ident === e)
            if(!num){
                almacen.pop()
                setVisible(false)
            }
        }, 3000);
    }
    return(
        <Fragment>
            <img
                className="styleImg"
                src={visible ? image : hide}
                onClick={almacenar}
            />
        </Fragment>
    )
}

export default Image;