import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile(params) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h2>Profile page</h2>
      <p>{user.username}</p>
    </>
  );
}

export default Profile;
