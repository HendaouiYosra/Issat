import styles from "./Article.module.css"
function Article() {
    return (
        <div className={styles.container}>
            
            <img className={styles.articleImg}src="https://international-blogs.ncl.ac.uk/hs-fs/hubfs/65782.jpeg?width=600&name=65782.jpeg" alt="" />
        <h5>titre de l'article</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ex</p>
        </div>
    )
}

export default Article
