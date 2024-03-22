import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useContext, useState } from "react";
import Logo from "../components/Logo";
import { auth, upload } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("salsa@example.com");
  const [password, setPassword] = useState("qwerty");
  const [error, setError] = useState("");
  const { dispatch, currentUser } = useContext(AuthContext);
  function getErrorMessage(errorCode) {
    const errorMessages = {
      "auth/invalid-email": "L'adresse e-mail est mal formatée.",
      "auth/user-disabled": "Cet utilisateur a été désactivé.",
      "auth/user-not-found":
        "Il n'existe aucun utilisateur correspondant à cette adresse e-mail.",
      "auth/wrong-password": "Le mot de passe est invalide.",
    };
    return (
      errorMessages[errorCode] || "Une erreur est survenue. Veuillez réessayer."
    );
  }

  const signIn = (e) => {
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({ type: "LOGIN", payload: userCredential.user });
        const defaultPhotoPath = "assets/s1.jpg";
        upload(defaultPhotoPath, "Fares Gabsi");
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = getErrorMessage(errorCode);
        setError(errorMessage);
        console.log("Erreur", errorCode, errorMessage);
      });
  };

  return (
    <main className={styles.login}>
      <div className={styles.logoContainer}>
        {" "}
        <Logo fontSize={30} position={-70} />
      </div>

      <form className={styles.form}>
        {" "}
        <div className={styles.title}>
          {" "}
          <h4>Se Connecter</h4>
          <p>Veuillez ecrire votre email et mot de passe </p>
        </div>
        <div>
          <select
            className={styles.dropDown}
            name="type-utilisateur"
            id="utilisateur"
          >
            <option className={styles.option} value="enseingnat">
              👨‍🏫 Enseingant
            </option>
            <option className={styles.option} value="etudiant">
              👩‍🎓 Etudiant
            </option>
          </select>
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.inputelement}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Mot de passe</label>
          <input
            className={styles.inputelement}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <small className={styles.error}>{error}</small>
        <div>
          <button onClick={signIn} className={styles.button}>
            Login
          </button>
        </div>
      </form>
    </main>
  );
}

/* //UI ORIGINALL
import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import { useState } from "react";
import Logo from "../components/Logo";
export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("salsa@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <main className={styles.login}>
      <div className={styles.logoContainer}>
        {" "}
        <Logo fontSize={30} position={-70} />
      </div>

      <form className={styles.form}>
        {" "}
        <div className={styles.title}>
          {" "}
          <h4>Se Connecter</h4>
          <p>Veuillez ecrire votre email et mot de passe </p>
        </div>
        <div >
          <select className={styles.dropDown} name="type-utilisateur" id="utilisateur">
            <option  className={styles.option} value="enseingnat">👨‍🏫  Enseingant</option>
            <option className={styles.option} value="etudiant">👩‍🎓  Etudiant</option>
          </select>
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.inputelement}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Mot de passe</label>
          <input
            className={styles.inputelement}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        
        <Link to='/home'><div><button className={styles.button}>Login</button></div></Link>
          
       
      </form>
    </main>
  );
}*/

/*
import { Link , useNavigate} from "react-router-dom";

import styles from "./Login.module.css";
import { useState } from "react";
//import Logo from "../components/Logo";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const navigate = useNavigate();

  const [email, setEmail] = useState("salsa@example.com");
  const [password, setPassword] = useState("qwerty");
  const [error, setError] = useState("");

  function getErrorMessage(errorCode) {
    const errorMessages = {
        'auth/invalid-email': 'L\'adresse e-mail est mal formatée.',
        'auth/user-disabled': 'Cet utilisateur a été désactivé.',
        'auth/user-not-found': 'Il n\'existe aucun utilisateur correspondant à cette adresse e-mail.',
        'auth/wrong-password': 'Le mot de passe est invalide.',
      
    };
    return errorMessages[errorCode] || 'An error occurred. Please try again.';
}
const signIn = (e) => {
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        navigate('/home');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = getErrorMessage(errorCode);
        setError(errorMessage);
        console.log("Erreur", errorCode, errorMessage);
      });
};

  return (
    <main className={styles.login}>
      <div className={styles.logoContainer}>
        {" "}
        
      </div>

      <form className={styles.form}>
        {" "}
        <div className={styles.title}>
          {" "}
          <h4>Se Connecter</h4>
          <p>Veuillez ecrire votre email et mot de passe </p>
        </div>
        <div >
          <select className={styles.dropDown} name="type-utilisateur" id="utilisateur">
            <option  className={styles.option} value="enseingnat">👨‍🏫  Enseingant</option>
            <option className={styles.option} value="etudiant">👩‍🎓  Etudiant</option>
          </select>
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.inputelement}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Mot de passe</label>
          <input
            className={styles.inputelement}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <small className={styles.error}>{error}</small>
       <div><button onClick={signIn} className={styles.button}>Login</button></div>
        
          
       
      </form>
    </main>
  );
}*/
