import Item from "./Item";
import Logo from "./Logo";
import styles from "./Navbar.module.css";
const items = [
  {
    id: 118836,
    name: "Accueil",
    image: "/assets/accueil.png",
  },
  {
    id: 933372,
    name: "Actualités",
    image: "/assets/actualite.png",
  },
  {
    id: 499476,
    name: "Cours",
    image: "/assets/cours.png",
  },
  {
    id: 499476,
    name: "Emploi du temps",
    image: "/assets/temps.png",
  },
  {
    id: 499476,
    name: "Calendrier des examens",
    image: "/assets/temps.png",
  },
  {
    id: 499476,
    name: "Documents",
    image: "/assets/des-documents.png",
  },
  {
    id: 499476,
    name: "Network",
    image: "/assets/network.png",
  },
  {
    id: 499476,
    name: "Liste des notes",
    image: "/assets/resultats.png",
  },
  {
    id: 499476,
    name: "Offres de stage",
    image: "/assets/emploi.png",
  },

  {
    id: 499476,
    name: "Service de support",
    image: "/assets/service-clients.png",
  },
];
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo position={-50} fontSize={30} />
      </div>
      <div>
        <div className={styles.content}>
          {items.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
