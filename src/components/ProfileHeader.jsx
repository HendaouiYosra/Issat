import styles from "./ProfileHeader.module.css";
function ProfileHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img
          src="https://via.placeholder.com/78x74"
          alt=""
          className={styles.profileImage}
        />{" "}
        <div className={styles.info}>
          <div className={styles.name}>Ali Mejri</div>
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
