import styles from "./Banner.module.css"
export default function Banner({bannerImage}){

  return(
    <div className={styles.bannerContainer}>
      <img src={bannerImage} alt="" />
    </div>
  )
}