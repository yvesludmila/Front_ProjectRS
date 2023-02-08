import React from "react";
import { Link } from "react-router-dom";

export const ResetPwd2 = () => {
  return (
    <div className="container-log">
      <div className="form-container">
        <div className="form-title">
          <h3>ISPMCommunity</h3>
        </div>
        <></>
        <div className="txt-input">
          <input
            className="input"
            type="password"
            placeholder="Nouveau mot de passe"
          />
        </div>
        <div className="txt-input">
          <input className="input" type="password" placeholder="confirmer" />
        </div>
        <div className="btn-log">
          <Link to="/reset-pwd3">
            <button className="btn">SUIVANT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ResetPwd2;
