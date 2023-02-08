import React from "react";
import { Link } from "react-router-dom";

export const ResetPwd1 = () => {
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
            type="text"
            placeholder="Enter la code envoyer"
          />
        </div>
        <div className="btn-log">
          <Link to="/next-reset-pwd">
            <button className="btn">SUIVANT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ResetPwd1;
