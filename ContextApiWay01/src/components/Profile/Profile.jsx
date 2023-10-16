import UserContext from "../../context/UserContext";
import { useContext } from "react";
const Profile = () => {
  const { user } = useContext(UserContext);
  {
    if (!user) {
      return (
        <>
          <h1>Please Login</h1>
        </>
      );
    } else {
      return <h1> Hello {user}</h1>;
    }
  }
};

export default Profile;
