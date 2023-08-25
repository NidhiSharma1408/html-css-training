import { useState } from "react";
let i = 0;
// import { useState } from react;
function Counter() {
    console.log("Function called", i++);
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
    function changeStep(event) {
        setStep(parseInt(event.target.value));
    }
    return (
        <div id="assignment">

            <div id="counter">
                <h2>Value of counter is {count}</h2>
                <h3>Value of step is {step}</h3>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
                <button onClick={reset}>Reset</button>
                <input id="step" type="number" onChange={changeStep} placeholder="Step" />
            </div>
        </div>
    )
}

export default Counter;