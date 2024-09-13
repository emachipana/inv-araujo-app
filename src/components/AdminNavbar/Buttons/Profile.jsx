import { Profile as Container } from "./styles";

function Profile({ user }) {
  return (
    <Container 
      alt="user-profile"
      src={user.image || "/img/user_default.jpg"}
    />
  );
}

export default Profile;