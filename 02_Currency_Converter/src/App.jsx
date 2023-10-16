import { useEffect, useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import useCurrencyInfo from "./components/hooks/useCurrencyInfo";

function App() {
  const [currencySelectedFrom, setCurrencySelectedFrom] = useState("usd");
  const [currencySelectedTo, setCurrencySelectedTo] = useState("npr");
  const [amount, setAmount] = useState(0);
  const [amountConverted, setAmountConverted] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  //CALLING CUSTOM HOOK
  const currencyInfo = useCurrencyInfo(currencySelectedFrom);
  const optionValues = Object.keys(currencyInfo);
  //Handle convert button
  const handleClickToConvertAmount = () => {
    const total = currencyInfo[currencySelectedTo] * amount;
    setAmountConverted(total);
  };
  useEffect(() => {
    if (amount > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [amount]);

  return (
    <div className="wrapper">
      <div className="inner-wrapper">
        <Inputs
          defaultChecked="false"
          label="From"
          optionValues={optionValues}
          currencySelectedFrom={currencySelectedFrom}
          setCurrencySelectedFrom={setCurrencySelectedFrom}
          amount={amount}
          setAmount={setAmount}
        />
        <Inputs
          defaultChecked="false"
          label="To"
          optionValues={optionValues}
          currencySelectedTo={currencySelectedTo}
          setCurrencySelectedTo={setCurrencySelectedTo}
          amountConverted={amountConverted}
          disabled={true}
        />
        <div
          className="button"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            style={{
              marginTop: "1rem",
              width: "250px",
              height: "40px",
              fontSize: "20px",
            }}
            disabled={buttonDisabled}
            onClick={handleClickToConvertAmount}
          >
            Convert {currencySelectedFrom} to {currencySelectedTo}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
