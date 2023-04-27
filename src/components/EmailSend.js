import React, { useState } from "react";
import styles from   "../styles/EmailSend.module.css";
import { BsMoon, BsSun } from "react-icons/bs";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

function EmailSend() {
  const [color, setcolor] = useState("white");

  function myFunction(e) {
    const { checked } = e.target;
    var element = document.body;
    if (checked) {
      element.classList.toggle(styles["dark-mode"]);
      setcolor("black");
    } else {
      element.classList.remove(styles["dark-mode"]);
      setcolor("white");
    }
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["form"]}>
        <div className={styles["headContianer"]}>
          <div className={styles["sign-switch-contianer"]}>
            <label className={styles["switch"]}>
              <BsMoon className={styles["fa-moon-o"]} />
              <input type="checkbox" onChange={myFunction} />
              <span className={styles["slider round"]}></span>
              <BsSun className={styles["fa-sun-o"]} />
            </label>
          </div>
          <div className={styles["flx"]}>
            {color == "white" && <img src={logo1} className={styles["logo"]} />}
            {color == "black" && <img src={logo2} className={styles["logo"]} />}
            <h2 className={styles["tit"]}>L'email a été envoyé</h2>
          </div>

          <div>
          
            <p className={styles["p"]}>
              S'il vous plait vérifier votre boite de réception et cliquez sur
              le lien reçu pour réintialiser votre mot de passe
            </p>
            <button className={styles["b"]}>
              <span className={styles["sp"]}>connexion</span>
            </button>
            <p className={styles["pas_recu"]}>
              Je n'ai pas recu le lien?<button className={styles["ren"]}>Renvoyé</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSend;
