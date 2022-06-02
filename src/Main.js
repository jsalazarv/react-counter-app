import React from "react";
import CounterApp from "./components/CounterApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    return (
        <div className="app-container">
            <CounterApp value={0}/>
            <footer className="footer">
                <p className="mr-2">Diseñado con</p>
                <FontAwesomeIcon icon={ faHeart }/>
            </footer>
        </div>
    );
}

export default Main;
