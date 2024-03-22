import { useContext, useEffect, useState } from "react";
import styles from "./ProfileHeader.module.css";
import { getAuth } from "firebase/auth";
import AuthContext from "../contexts/AuthContext";
function ProfileHeader() {
   
        const [displayName, setDisplayName] = useState("");
        const [photoURL, setPhotoURL] = useState("");
      const {currentUser} = useContext(AuthContext);
        useEffect(() => {
          
          
      
          if (currentUser) {
            // Obtenez le nom d'affichage et l'URL de la photo du profil de l'utilisateur
            const displayName = currentUser.displayName;
            const photoURL = currentUser.photoURL;
      console.log(photoURL)
            setDisplayName(displayName);
            setPhotoURL(photoURL);
          }
        }, []);
      
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img
          src={photoURL || "https://via.placeholder.com/78x74"}

          alt=""
          className={styles.profileImage}
        />{" "}
        <div className={styles.info}>
          <div className={styles.name}>{displayName}</div>
          <div className={styles.role}>Etudiant(e)</div>
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.iconContainer}>
          <img
            src="assets/notification.png"
            alt=""
          />
        </div>

        <div className={styles.iconContainer}>
          <img
            src="assets/networkHeader.png"
            alt=""
          />
        </div>

        <div className={styles.mode}>
          <img
            src="assets/mode.png"
            alt="Icon"
          />
          <label className={styles.toggle}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
