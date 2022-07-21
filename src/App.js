import { useState } from 'react';

function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['+', '-', '*', '/', '.'];

    const updateCalc = value => {
        if(
            ops.includes(value) && calc === "" ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ){
              return;  
        }

        setCalc(calc + value);

        if(!ops.includes(value)){
            setResult(eval(calc + value).toString());
        }

    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deletLast = () => {
        if(calc == ""){
            return;
        }

        const val = calc.slice(0, -1);

        setCalc(val);
        setResult(eval(val));
    } 

    const createNumbers = () => {
        const numbers = [];

        for(let i = 1; i < 10; i++){
            numbers.push(
              <button  onClick={() => updateCalc(i.toString())} 
              key={i}>{i}</button>
            )
        }
    return numbers;
  }

  return (
    <div className="App">
        <div className="calculator">
            <div className="display">
                {result ? <span>{result}</span> : "" } {calc || "0"}
            </div>

            <div className="operators">
                <button onClick={() => updateCalc('/')}>/</button>
                <button onClick={() => updateCalc('*')}>*</button>
                <button onClick={() => updateCalc('+')}>+</button>
                <button onClick={() => updateCalc('-')}>-</button>

                <button onClick={() => deletLast()}>AC</button>
            </div>

            <div className="numbers">
                { createNumbers() }
                <button onClick={() => updateCalc('0')}>0</button>
                <button onClick={() => updateCalc('.')}>.</button>
                <button onClick={() => calculate()}>=</button>
            </div>
        </div>
    </div>
  );
}

export default App;
