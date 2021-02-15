import React, { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    //componentDidMount
    useEffect(() => {
        console.log("The counter was mounted on the page");
    }, []);
    //This will only run when the counter was shown on the screen
    //it only occours once 

    //componentDidUpdate
    useEffect(() => {
        console.log("The counter has been updated");
    }, [count]);
    //This would run when the count is increasing
    //It will run however many times the counter is increased

    //componentWillUnmount
    useEffect(() => {
        console.log("the use effect ran");
        return () => {
            console.log("the return is being ran");
        };
    }, []);
    //this only runs when something is removed from the page
    //it would only happen after the page has been loaded

    return (
        <div>
            <h6>Counter</h6>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default Counter;