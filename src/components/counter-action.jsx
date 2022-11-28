import React, { useState, useEffect } from "react";

function CounterAction () {
    const[counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `it has been clicked ${counter} times`;
    });
    return (
        <div className="">
            <h2>Example useEffect</h2>
            <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>
        </div>
    );
};

export default CounterAction;