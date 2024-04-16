import styles from "./Banner.module.css"
export default function Banner({bannerImage}){

  return(
    <div>
      <img src={bannerImage} alt="" />
    </div>
  )
}