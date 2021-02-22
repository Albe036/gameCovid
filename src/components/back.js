import React from 'react';
import { Link } from 'react-router-dom';


const Back = () =>{
    return(
        <h3 className="styleBack">
            <Link to="/" className="link">
                Back | Volver
            </Link>
        </h3>
    )
}

export default Back;