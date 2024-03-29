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
      <img src={imgUrl} alt='Profile Picture' />
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h3>{role}</h3>
      <p>{bio}</p>
      <img src={banner} alt='Profile Banner' />
    </div>
  );
}
