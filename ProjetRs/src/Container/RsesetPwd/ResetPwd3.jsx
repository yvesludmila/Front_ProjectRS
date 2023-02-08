import React from "react";
import { Link } from "react-router-dom";

export const ResetPwd3 = () => {
  return (
    <div className="container-log">
      <div className="form-container">
        <div className="form-title">
          <h3>ISPMCommunity</h3>
        </div>
        <></>
        <div className="txt-input">
          <p>Mot de passe rennouvelé avec succées</p>
        </div>
        <div className="btn-log">
          <Link to="/next-reset-pwd-succés">
            <button className="btn">Terminé</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ResetPwd3;
