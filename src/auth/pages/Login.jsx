import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = () => {
    login("Frank");
    navigate("/", { replace: true });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
