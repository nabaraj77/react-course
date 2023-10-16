import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Helo Nabaraj</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
