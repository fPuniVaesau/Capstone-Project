import styles from './ProfileCard.module.css';
export default function ProfileCard({
  imgUrl,
  firstName,
  lastName,
  role,
  location,
  bio,
}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.profileName}>
        {firstName} {lastName}
      </h2>

      <img className={styles.profileImg} src={imgUrl} alt='Profile Picture' />
      <div className={styles.infoContainer}>
        <h3>{role}</h3>
        <p className={styles.location}>{location}</p>
        <p className={styles.bio}>{bio}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.follow}>Follow+</button>
      </div>
    </div>
  );
}
