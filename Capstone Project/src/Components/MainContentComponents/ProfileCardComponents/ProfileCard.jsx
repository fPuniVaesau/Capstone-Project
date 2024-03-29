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
      <h3>{location}</h3>
      <h3>{role}</h3>
      <p>{bio}</p>
      <img className={styles.profileBanner} src={banner} alt='Profile Banner' />
    </div>
  );
}
