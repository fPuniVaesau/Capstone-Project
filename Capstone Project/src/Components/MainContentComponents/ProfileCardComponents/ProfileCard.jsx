import styles from "./ProfileCard.module.css"
export default function ProfileCard({imgUrl, name, role, location, bio}){
    return(
        <div className={styles.container}>
            <img src={imgUrl} alt="" />
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h3>{role}</h3>
            <p>{bio}</p>
        </div>
    );
}