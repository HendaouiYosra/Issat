import React, { useEffect, useState } from "react";
import styles from "./Actualite.module.css";
import Article from "./Article";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../firebase"; 

function Actualite() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      
      const querySnapshot = await getDocs(query(collection(db, "actualite"), limit(3)));
      const articlesWithImages = await Promise.all(querySnapshot.docs.map(async (doc) => {
        const data = doc.data();
        
        if (data.imageUrl) {
          const imageRef = ref(storage, data.imageUrl);
          const imageUrl = await getDownloadURL(imageRef);
          return { ...data, imageUrl }; 
        } else {
          return data; 
        }
      }));
      setArticles(articlesWithImages);
    };

    fetchArticles();
  }, []);

  return (
    <div className={styles.container}> 
      <h4>Actualités Dirigés</h4>
      <div className={styles.articles}>
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Actualite;












//YOSRA S UI
/*import styles from "./Actualite.module.css"
import Article from "./Article"
function Actualite() {
    return (
        <>
        <div className={styles.container}> 
        <h4>Actualités Dirigés</h4>
        <div className={styles.articles}>
            
            <Article/>
            <Article/>
            <Article/>
            </div>
            </div>
   
        </>
    )
}

export default Actualite*/
