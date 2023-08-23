import { useState } from "react";

// import { useState } from react;
function Counter() {
    let [count, setCount] = useState(0);
    let [step, setStep] = useState(1);
    function increase() {
        setCount(count + step);
    }
    function decrease() {
        setCount(count - step);
    }
    function reset() {
        setCount(0);
    }
    function changeStep() {
        console.log(step);
        setStep(document.getElementById("step").value);
    }
    return (
        <div id="assignment">

            <div id="counter">
                <h2>Value of counter is {count}</h2>
                <h3>Value of step is {step}</h3>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
                <button onClick={reset}>Reset</button>
                <input id="step" type="number" placeholder="Step" />
                <button onClick={changeStep}>Change Step</button>
            </div>
        </div>
    )
}

export default Counter;