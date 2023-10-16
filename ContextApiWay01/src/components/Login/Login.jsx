import { useState } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(userName, password);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="User Name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
