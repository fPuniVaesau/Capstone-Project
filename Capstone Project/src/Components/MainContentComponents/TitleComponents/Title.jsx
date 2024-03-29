import styles from "./Title.module.css"

export default function Title({mainTitle}){
    return(
        <div className={styles.titleContainer}>
            <h1 className={styles.mainTitle}>{mainTitle}</h1>
        </div>
    )
}