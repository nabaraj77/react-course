/* eslint-disable react/prop-types */
import "./Inputs.css";

const Inputs = ({
  label,
  optionValues = [],
  setCurrencySelectedFrom,
  currencySelectedFrom,
  setCurrencySelectedTo,
  currencySelectedTo,
  amount,
  setAmount,
  amountConverted,
  disabled,
}) => {
  return (
    <div className="inputs-wrapper">
      <div className="from-wrapper">
        <div className="from">
          <h4 style={{ color: "gray" }}>{label}</h4>
        </div>
        <div className="from-money">
          <input
            type="number"
            style={{
              outline: "none",
              border: "none",
            }}
            disabled={disabled ? disabled : false}
            defaultValue={amountConverted ? amountConverted : amount}
            onChange={(e) => {
              setAmount(() => {
                return Number(e.target.value);
              });
            }}
          />
        </div>
      </div>
      <div className="currency-type-wrapper">
        <div className="currency">
          <h4 style={{ color: "gray" }}>Currency Type</h4>
        </div>
        <div className="options">
          <select
            name="currency"
            id="currency"
            value={
              currencySelectedFrom ? currencySelectedFrom : currencySelectedTo
            }
            onChange={(e) => {
              (setCurrencySelectedFrom &&
                setCurrencySelectedFrom(() => {
                  return e.target.value;
                })) ||
                setCurrencySelectedTo(() => {
                  return e.target.value;
                });
            }}
            style={{
              height: "30px",
              width: "100px",
              outline: "none",
              fontSize: "20px",
              border: "none",
            }}
          >
            {optionValues.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
