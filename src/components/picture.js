import React, { useState} from 'react';



const Picture = (props) =>{ 
    let names = require('./count');

    const { src, name, search } = props.icons;

    let [direct, setDirect] = useState(search);
    

    const onClick = async () =>{
        names.push(name);
        setDirect(src);
        setTimeout(() => {
            if(names[0] === names[1]){
                names.pop();
                console.log(`iguales ${names}`)
            }else if(names[0] !== names[1]){
                setDirect(search);
                names.pop();
            }
            if(names.length === 0){
                names.pop();
                console.log(`uno: ${names}`)
            }
        }, 3000);

    }
    return(
        <div
            onClick = {onClick}
            className="Soup_picture"
        >
            <img
                src = {direct}
                alt = {name}
                width = {60}
                height = {70}
            />
            <p>{name}</p>
        </div>
)};

export default Picture;