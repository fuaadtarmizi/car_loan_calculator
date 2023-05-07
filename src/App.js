import { useState, useEffect, useRef } from "react";
import Help from "./components/Help";
import "./App.css";


//pengiraan loan

function App() {
  const [rawLoanValue, setLoanValue] = useState(40000);
  const [rawInterestValue, setInterestValue] = useState(1);
  const [rawDepoValue, setDepoValue] = useState(2);
  const [rawPeriodValue, setPeriodValue] = useState(20);
  const [show, setShow] = useState(false);

  const overlayRef = useRef("App-parent--overlay");

  const ResultCalc = () => {
    return (
      <div className="App-content--card">
        <h1>Result Loan</h1>
        <div className="App-content--result">
          <p>Car Price</p>
          <span>
            RM
            {Math.round(rawLoanValue)  }
          </span>


          <p>Car Depo</p>
          <span>
            RM        
            {Math.round( rawLoanValue-rawDepoValue ) }
          </span>

        </div>



        <div className="App-content--result">
          <p>Bunga</p>
          <span>
            {Math.round(  rawDepoValue * (rawInterestValue / 100) * rawPeriodValue +
                rawLoanValue * 0
            ) }

          </span>
        </div>

        <div className="App-content--result">
          <p>Total Monthly Payment</p>
          <span>
          RM
            {(
              ((rawDepoValue * (rawInterestValue / 10) )* rawPeriodValue +
                rawLoanValue * 1) /
              (rawPeriodValue * 12)              
            ).toFixed(2)}{" "}
            for {rawPeriodValue * 12} Months
          </span>
        </div>
      </div>
    );
  };
  useEffect(() => {
    document.title = "Cars Loan Calculator";
  });






//design square Input


  const HandleOpen = () => {
    setShow(!show);
    overlayRef.current.classList.toggle("dark");
  };
  return (
    <div className="App-parent">
      <div className="App-parent--overlay" ref={overlayRef}></div>
      {show ? <Help toggle={HandleOpen} /> : null}
      <div className="App-parent--header">
        <div className="App-parent--header--left">
          <p>Calculate</p>
          <h1>Cars Loan</h1>
        </div>
        <div className="App-parent--header--right">
          
        </div>
      </div>

      <div className="App-content--parent">
        <ResultCalc />
        <div className="App-content--input">
          <h1>Calculation</h1>
          <form>
            <p>Car Price (RM)</p>
            <input
              onChange={(e) => setLoanValue(e.target.value)}
              value={rawLoanValue}
              type="number"
            />
          </form>


          <form>
            <p>Car Depo ()</p>
            <input
              onChange={(e) => setDepoValue(e.target.value)}
              value={rawDepoValue}
              type="number"
            />
          </form>



          <form>
            <p>Bunga (%)</p>
            <input
              onChange={(e) => setInterestValue(e.target.value)}
              value={rawInterestValue}
              type="number"
            />
          </form>


          <form>
            <p>Period (Years)</p>
            <input
              onChange={(e) => setPeriodValue(e.target.value)}
              value={rawPeriodValue}
              type="number"
            />
          </form>
        </div>
      </div>
      <div className="App-footer">
        FUAAD PROPERTY{""}
        
          
      </div>
    </div>
  );
}

export default App;
