import { Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./../context/UserContext";
import { useNavigate } from "react-router-dom"; 
const email = "nombre@email.com";

const Profile = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  return (
    <div className="profile">
      <h2>Perfil</h2>
      <p>Email: {email}</p>
      <Button onClick={handleLogout}>Cerrar sesión</Button>
    </div>
  );
};

export default Profile;
