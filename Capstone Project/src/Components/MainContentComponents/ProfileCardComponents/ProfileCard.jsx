import styles from './ProfileCard.module.css';
export default function ProfileCard({
  imgUrl,
  name,
  role,
  location,
  bio,
  banner,
}) {
  return (
    <div className={styles.container}>
      <img className={styles.profileImg} src={imgUrl} alt='Profile Picture' />
      <h2 className={styles.profileName}>{name}</h2>
      <h3 className={styles.role}>{role}</h3>
      <h3 className={styles.location}>{location}</h3>
      <p className={styles.bio}>{bio}</p>
      <img className={styles.profileBanner} src={banner} alt='Profile Banner' />
    </div>
  );
}
