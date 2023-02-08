import react from "react";
import ispm from "../image/ispm.PNG";

const Acceuil = () => {
  return (
    <div className="container">
      <div className="ispm-img">
        <img src={ispm} alt="" id="#" />
      </div>
      <div className="annee-30ans">
        <p>
          30 <span>Ans</span>
        </p>
      </div>

      <div className="ispm-Title">
        <h1> Institut Supérieur Politechnique </h1>
        <h1> de Madagascar</h1>
      </div>
      <div className="pg-title-2">
        <h4>FAHAIZANA- FAMPANDROSOANA- FIHAVANANA</h4>
      </div>
      <div className="txt-objectif">
        <p>
          {" "}
          L' objectif de l' ISPM est de former des techniciens et ingenieurs en
        </p>
        <p>
          phase de scientifiques et technoloqiques et conscients de realités
        </p>
        <p>économique et socials à Madagascar.</p>
      </div>
      <div className="txt-Proposition">
        <p>L'ISPM dans ce site, se propose de donner essentiel de</p>
        <p>son historique et surtout de ses activités</p>
      </div>
      <button className="btn-contact" type="button" onClick={""}>
        Contactez nous
      </button>
    </div>
  );
};
export default Acceuil;
