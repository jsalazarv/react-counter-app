import React, {useState} from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import "./counter.css";

const CounterApp = ({ value = 0 }) => {
    const [counter, setCounter] = useState(value);
    const handleSubtract = () => setCounter(counter - 1);
    const handleAdd = () => setCounter(counter + 1);
    const handleReset = () => setCounter(value);

    return (
        <div className="wrapper">
            <div className="counter-container">
                <button className="counter-button" onClick={handleSubtract}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <div className="counter">
                    { counter }
                </div>
                <button className="counter-button" onClick={handleAdd}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <button className="reload-button"
                    onClick={handleReset}>
                <FontAwesomeIcon icon={faArrowRotateRight} />
            </button>
        </div>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CounterApp;
