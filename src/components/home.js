import React from 'react';
import Title from './title';
import { Link } from 'react-router-dom';



const Home = () =>{
    return(
        <div className="styleHome">
            <Title/>
            <Link to="/play" className="link">
                <h2 className="menu">NEW GAME</h2>
            </Link>
            <Link to="/scores" className="link">
                <h2 className="menu">SCORES</h2>
            </Link>
            <Link to="/howplay" className="link">
                <h2 className="menu">HOW TO PLAY</h2>
            </Link>
            <Link to="/setting" className="link">
                <h2 className="menu">SETTING</h2>
            </Link>

        </div>
    )
}

export default Home;