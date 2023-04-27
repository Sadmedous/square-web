import React, {useState} from 'react';
import style from '../../styles/auth.module.css';
import squarelogo from  '../../assets/squarelogo.png';
import squarelogolight from  '../../assets/squarelogolight.png';
import { BsMoon,BsSun } from "react-icons/bs";
import { FaRegEnvelope,FaRegEye } from "react-icons/fa";
const intailState = {email:"",password:"",stayConnected:false};
const SignIn = () => {
    const [color,setColor] = useState("white");
    const [info,setInfo] = useState(intailState);
    function switchMode(e) {
        const {checked} = e.target
        var element = document.body;
        if(checked){
            element.classList.toggle(style["dark-mode"]);
            setColor('dark');
        }else{
            element.classList.remove(style["dark-mode"]);
            setColor('white');
        }
    }
    const checkform = () => {
         const {email,password} = info;
         if (email && password == "") {
            return "Ce champ est obligatoire ";
        }
        else if (email === "") {
            return "L'adresse e-mail saisie n'est pas valide"  ;  
        }
        else if (password === "") {
            return "L'adresse e-mail saisie n'est pas valide"  ;  
        } else {
            return "succees";
        }
    }
    const onChange = (e) =>{
        const {value,name,checked} = e.target;
        if (name === "stayConnected" ) {
            setInfo((prev)=>({...prev,[name]:checked}));
        } else {
            setInfo((prev)=>({...prev,[name]:value}));
        }
    }
    const submit = async(e) =>{
        e.preventDefault();
        const check = checkform();
        if (check === "succees") {
            
        } else {
            alert(check);
        }
    }
  return (
    <div className={style['bg']}>
        <div className={style['circles-container']}>
            <div className={style['sign-container']}>
                <div className={style['sign-form-container']}>
                    <div className={style['sign-switch-contianer']}>
                        <label className={style["switch"]}>
                            <BsMoon className={style['fa-moon-o']} />
                            <input type="checkbox" onChange={switchMode} />
                            <span className={style["slider"]+" "+style["round"]}></span>
                            <BsSun className={style['fa-sun-o']}/>
                        </label>
                    </div>
                    <div className={style['sign-form-header-container']}>
                        {color === "white" ?  <img className={style['sign-logo'] }src={squarelogo} /> : <img className={style['sign-logo']} src={squarelogolight} />  }
                        <h1>Sign in</h1>
                    </div>
                    <div className={style['sing-from']} >
                        <div className={style['form-wraper']}>
                            <FaRegEnvelope className={style['fa-envelope']}/>
                            <input type='email' name='email' onChange={onChange} placeholder='Votre e-mail' />
                        </div>
                        <div  className={style['form-wraper']}>
                            <FaRegEye className={style['fa-eye']} />
                            <input type='password' name='password' onChange={onChange} placeholder='Votre Mot de passe' />
                        </div>
                    </div>
                    <div className={style['sign-options']}>
                        <div className={style['sign-reste-checkbox']}>
                            <label className={style["container"]}>Rester connecté
                                <input type="checkbox" onChange={onChange} name='stayConnected'/>
                                <span className={style["checkmark"]}></span>
                            </label>
                        </div>
                        <a>Mot de passe oublié?</a>
                    </div>
                    <div className={style['btn-container']}>
                         <button onClick={submit} className={style['sign-from-btn']}>
                            connexion
                        </button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn