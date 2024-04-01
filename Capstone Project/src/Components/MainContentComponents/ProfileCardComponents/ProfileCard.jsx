import styles from './ProfileCard.module.css';
export default function ProfileCard({
  imgUrl,
  firstName,
  lastName,
  role,
  location,
  bio,
  banner,
}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.profileName}>
        {firstName} {lastName}
      </h2>

      <img className={styles.profileImg} src={imgUrl} alt='Profile Picture' />
      <div className={styles.infoContainer}>
        <h3>{role}</h3>
        <h3>{location}</h3>
        <p>{bio}</p>
      </div>

      {/* <img className={styles.profileBanner} src={banner} alt='Profile Banner' /> */}

      {/* <button className={styles.follow}>Follow+</button> */}
    </div>
  );
}
