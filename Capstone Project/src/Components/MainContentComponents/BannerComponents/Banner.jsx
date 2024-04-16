import styles from "./Banner.module.css"
export default function Banner({bannerImage}){

  return(
    <div className={styles.bannerContainer}>
      <img 
      className={styles.banner}
      src={bannerImage} alt="banner image" />
    </div>
  )
}