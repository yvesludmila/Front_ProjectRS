import React from "react";
import "../Style/LoginStyle.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const nav = useNavigate();
  return (
    <div className="container-log">
      <div className="form-container">
        <div className="form-title">
          <h3>ISPMCommunity</h3>
        </div>
        <></>
        <div className="txt-input">
          <input className="input" type="text" placeholder="N° matricule" />
        </div>
        <div className="txt-input">
          <input className="input" type="password" placeholder="Mot de passe" />
        </div>
        <div className="reset-pwd">
          <Link to="/RESETPWD">
            <p>Mot de passe oublier?</p>
          </Link>
        </div>
        <div className="btn-log">
          <button className="btn" onClick={() => nav("/CommunutyPage")}>
            CONNEXION
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
