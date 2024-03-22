import React from "react";
import styles from "./AutreActualite.module.css";

function AutreActualite() {
  return (
    <div className={styles.container}>
      <h4>Autres...</h4>
      <div className={styles.articles}>
        <div className={styles.row}>
          <div className={styles.article}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKww0qVS78_vuTXEBOP2sGblExntxmmpT0UZocKBbqHg&s" alt="" className={styles.imageArticle} />
            <div className={styles.content}>
              <h5>titre</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                minus quos error vero dicta ratione eos aspernatur 
              </p>
            </div>
          </div>
          <div className={styles.article}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKww0qVS78_vuTXEBOP2sGblExntxmmpT0UZocKBbqHg&s" alt="" className={styles.imageArticle} />
            <div className={styles.content}>
              <h5>titre</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                minus quos error vero dicta ratione eos aspernatur 
              </p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.article}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKww0qVS78_vuTXEBOP2sGblExntxmmpT0UZocKBbqHg&s" alt="" className={styles.imageArticle} />
            <div className={styles.content}>
              <h5>titre</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                minus quos error vero dicta ratione eos aspernatur 
              </p>
            </div>
          </div>
          <div className={styles.article}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKww0qVS78_vuTXEBOP2sGblExntxmmpT0UZocKBbqHg&s" alt="" className={styles.imageArticle} />
            <div className={styles.content}>
              <h5>titre</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                minus quos error vero dicta ratione eos aspernatur 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutreActualite;
