import React from "react";
import { Link, useNavigate } from "react-router-dom";

//import "../App.css";

const Menu = () => {
  return (
    <nav>
      <div className="Menu">
        <div className="content-menu">
          <p className="content-liste">
            <Link className="link-MENU" to="/">
              Acceuil
            </Link>
          </p>
          <p className="content-liste">
            <Link className="link-MENU" to="/NosFormation">
              Nos formation
            </Link>
          </p>

          <p className="content-liste">
            <Link className="link-MENU" to="/Actualitesetevenement">
              Actualités et Evènnements
            </Link>
          </p>
          <p className="content-liste">
            <Link className="link-MENU" to="/galerie">
              Galierie
            </Link>
          </p>
          <p className="content-liste">
            <Link className="link-MENU" to="/Reviews">
              Reviews
            </Link>
          </p>
          <p className="content-liste">
            <Link className="link-MENU" to="/Contact">
              Contacts
            </Link>
          </p>
          <div className="btn-log">
            <Link to="/log">
              <button className="btn-inscri">Connexion</button>
            </Link>
            <Link to="reg">
              <button className="btn-inscri">Inscription</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
