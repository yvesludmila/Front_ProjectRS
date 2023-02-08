import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Style/ResisterStyle.css";

function Register() {
  const nav = useNavigate;

  return (
    <div className="container-log">
      <div className="form-container-reg">
        <div className="form-title">
          <h3>ISPMCommunity</h3>
        </div>
        <></>
        <div className="txt-input">
          <input className="input" type="text" placeholder="Nom" />
        </div>
        <div className="txt-input">
          <input className="input" type="email" placeholder="Email" />
        </div>
        <div className="txt-input">
          <input className="input" type="password" placeholder="Mot de passe" />
        </div>
        <div className="txt-input">
          <input className="input" type="password" placeholder="Confirmer" />
        </div>
        <div className="reset-pwd">
          <Link to="/reg-form">
            <p>Vous avez dejà un compte?</p>
          </Link>
        </div>
        <div className="btn-log">
          <button className="btn" onClick={() => nav("/CommunutyPage")}>
            SUIVANT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
