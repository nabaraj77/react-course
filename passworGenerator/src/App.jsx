import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  let [password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const passwordRef = useRef(null);

  //PASSWORD COPY REF
  const handleCopyPassword = () => {
    console.log("clicked");
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "*&!+-";
    }
    for (let index = 1; index <= length; index++) {
      let random = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [length, charAllowed, numAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numAllowed]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h3>Password Generator Project No 2</h3>
      <div className="password" style={{ margin: "auto" }}>
        <input
          type="text"
          style={{ width: "300px", height: "30px" }}
          defaultValue={password}
          readOnly
          ref={passwordRef}
        />
        <button style={{ height: "38px" }} onClick={handleCopyPassword}>
          Copy
        </button>
        <div display="flex">
          <input
            type="range"
            min={8}
            max={40}
            defaultValue="8"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="" id="range">
            Range {length}
          </label>
          <input
            type="checkBox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => {
                return !prev;
              });
            }}
          />
          <label htmlFor="">Numbers</label>
          <input
            type="checkBox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => {
                return !prev;
              });
            }}
          />
          <label htmlFor="">Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
