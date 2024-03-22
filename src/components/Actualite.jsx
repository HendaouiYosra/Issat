import styles from "./Actualite.module.css"
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

export default Actualite
