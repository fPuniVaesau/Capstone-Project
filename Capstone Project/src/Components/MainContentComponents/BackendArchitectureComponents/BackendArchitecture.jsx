import BACTitle from './BACTitleComponents/BACTitle';
import BACintro from './BACintroComponents/BACintro';
import styles from './BackendArchitecture.module.css';

export default function BackendArchitecture() {
  return (
    <div className={styles.BACcontainer}>
      <BACTitle Title={'3 Main Components'} />
      <BACintro />
      
    </div>
  );
}
