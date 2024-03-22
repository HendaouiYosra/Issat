import styles from "./Item.module.css";
function Item({ item }) {
  console.log(item.image)
  return (
    <div className={styles.container}>
      <img src={item.image} alt="no"></img>
      <span className={styles.title}>{item.name}</span>
    </div>
  );
}

export default Item;
