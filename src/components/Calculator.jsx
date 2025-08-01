import { React, useState } from "react";
import "../styles/Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const enterInput = (input) => {
    if (display === "0") {
      setDisplay(input);
    } else {
      setDisplay(display + input);
    }
  };

  // ************** Doing oprations **************

  const oprations = (op) => {
    if (op === "-" && display === "0") {
      setDisplay("-");
      return;
    }

    setDisplay(display + op);
  };

  // calculate
  const calculate = () => {
    try {
      const filterd = display.replace(/×/g, "*").replace(/÷/g, "/");
      const result = eval(filterd);
      setDisplay(result.toString());
    } catch {
      setDisplay("Math Error!");
    }
  };

  // ************** clear and delete btns **************
  const clear = () => {
    setDisplay("0");
  };

  const del = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <main className="calculator">
      <div className="display">
        <div className="screen">{display}</div>
      </div>

      <div className="btns">
        <button className="clear" onClick={clear}>
          C
        </button>
        <button className="delete" onClick={del}>
          <i className="fa-solid fa-delete-left"></i>
        </button>
        <div></div>
        <button onClick={() => oprations("÷")}>÷</button>

        <button onClick={() => enterInput("7")}>7</button>
        <button onClick={() => enterInput("8")}>8</button>
        <button onClick={() => enterInput("9")}>9</button>
        <button onClick={() => oprations("×")}>×</button>

        <button onClick={() => enterInput("4")}>4</button>
        <button onClick={() => enterInput("5")}>5</button>
        <button onClick={() => enterInput("6")}>6</button>
        <button onClick={() => oprations("-")}>-</button>

        <button onClick={() => enterInput("1")}>1</button>
        <button onClick={() => enterInput("2")}>2</button>
        <button onClick={() => enterInput("3")}>3</button>
        <button onClick={() => oprations("+")}>+</button>

        <button onClick={() => enterInput("0")} className="zero">
          0
        </button>
        <button onClick={() => enterInput(".")}>.</button>
        <button className="eq" onClick={calculate}>
          =
        </button>
      </div>
    </main>
  );
};

export default Calculator;
