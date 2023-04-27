import React, { useState } from "react";
import style from "../styles/forgotPassword.module.css";
import {BsMoon,BsSun,BsEnvelope} from "react-icons/bs";
import lightLogo from "../assets/images/logoLight.png";
import darkLogo from "../assets/images/logoDark.png";
function ForgotPassword() {
  const [color, setColor] = useState("white");
  const [email, setEmail] = useState("");

  function myFunction(e) {
    const { checked } = e.target;
    var element = document.body;
    if (checked) {
      element.classList.toggle(style["dark-mode"]);
      setColor("black");
    } else {
      element.classList.remove(style["dark-mode"]);
      setColor("white");
    }
  }
  return (
    <div className={style["mdpOublierContainer"]}>
      <form className={style["mdpOublier"]}>
        <div className={style["divAllForm"]}>
          <div className={style["sign-switch-contianer"]}>
            <label className={style.switch}>
              <BsMoon className={style["fa-moon-o"]} />
              <input type="checkbox" onChange={myFunction} />
              <span className={style.slider+" "+style.round}></span>
              <BsSun className={style['fa-sun-o']} />
            </label>
          </div>
          <div className={style.header}>
            {color === "white" && (
              <img className={style["mdpOublierlogo"]} src={lightLogo} />
            )}
            {color === "black" && (
              <img className={style["mdpOublierlogo"]} src={darkLogo} />
            )}
            <h1 className={style["mdpOublierh1"]}>Mot De Passe Oublié?</h1>
          </div>
          <div className={style["theRestDiv"]}>
            <p className={style["mdpOublierP"]}>
              Entrez l'e-mail associé a votre compte et nous vous enverrons un
              e-mail avec les instructions pour réintialiser votre mot de passe.
            </p>
            <label className={style['email-place']}>
            <input
              type="email"
              placeholder={`Votre e-mail`}
              className={style["mdpOublierEmail"]}
              onChange={(e) => setEmail(e.target.value)}
            >
            </input>
            <BsEnvelope className={style["email-icon"]}/>
            </label>
            <button
              className={style["mdpOublierBtn"]}
            >
              Réinitialiser le mot de passe
            </button>
            <button className={style["mdpOublierbtnAnuuler"]}>Annuler</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
