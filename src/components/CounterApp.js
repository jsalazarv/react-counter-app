import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 0 }) => {
    const [counter, setCounter] = useState(value);
    const handleSubtract = () => setCounter(counter - 1);
    const handleAdd = () => setCounter(counter + 1);
    const handleReset = () => setCounter(value);

    return (
        <div>
            <h2>Counter App</h2>
            <h3>{ counter }</h3>
            <button onClick={handleSubtract}> - </button>
            <button onClick={handleReset}> RESET </button>
            <button onClick={handleAdd}> + </button>
        </div>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CounterApp;
