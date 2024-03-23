import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../firebase";
import styles from "./AutreActualite.module.css";

function AutreActualite() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {

      const articlesQuery = query(collection(db, "actualite"), );
      const querySnapshot = await getDocs(articlesQuery);
      
      const allArticles = [];
      let articlesCount = 0;

      for (const doc of querySnapshot.docs) {
        let article = doc.data();
        articlesCount++;
    
        if (articlesCount <= 3) continue;
        
  
        if (article.imageUrl) {
          try {
            const imageRef = ref(storage, article.imageUrl);
            const imageUrl = await getDownloadURL(imageRef);
            article = { ...article, imageUrl }; 
          } catch (error) {
            console.error("Error fetching image:", error);
            article.imageUrl = "default-fallback-image-url.jpg"; 
          }
        } else {
          article.imageUrl = "default-fallback-image-url.jpg"; 
        }
        allArticles.push(article);
      }

      setArticles(allArticles);
    };

    fetchArticles();
  }, []);

  return (
    <div className={styles.container}>
      <h4>Autres</h4>
      <div className={styles.articles}>
      
        <div className={styles.row}>
        {articles.map((article, index) => (
          <div key={index} className={styles.article}>
            <img src={article.imageUrl} alt="" className={styles.imageArticle} />
            <div className={styles.content}>
              <h5>{article.title}</h5>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default AutreActualite;





//YASOURA UI
/*import React from "react";
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
*/
