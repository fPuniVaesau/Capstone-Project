import styles from './BACTitle.module.css';

export default function BACTitle({Title}){

  return(
    <div className={styles.titleContainer}>
      <h3 className={styles.title}>{Title}</h3>
    </div>
  )
}