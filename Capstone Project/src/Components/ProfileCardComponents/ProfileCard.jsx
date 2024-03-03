import styles from "./ProfileCard.module.css"
export default function ProfileCard({profilePic, name, role, bio, location, CardBanner}){
    return(
        <div>
            <img className={styles.profilePic} src={profilePic} alt="Profile Picture" />
            <h1 className={styles.name}>{name}</h1>
            <h2 className={styles.role}>{role}</h2>
            <h3 className={styles.location}>{location}</h3>
            <p className={styles.bio}>{bio}</p>
            <img className={styles.banner} src={CardBanner} alt="Profile Banner" />
            <button className={styles.button}>Follow+</button>
        </div>
    )
}