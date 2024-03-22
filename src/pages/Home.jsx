import Navbar from "../components/Navbar";
import styles from "./Home.module.css";
import Actualite from "../components/Actualite";
import AutreActualite from "../components/AutreActualite";
import ProfileHeader from "../components/ProfileHeader";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.mainContent}>
        <ProfileHeader />
        <Actualite/>
        <AutreActualite />
      </div>
    </div>
  );
}

export default Home;
