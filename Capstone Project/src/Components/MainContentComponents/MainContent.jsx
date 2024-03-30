import ProfileCard from './ProfileCardComponents/ProfileCard';
import Title from './TitleComponents/Title';

import styles from './MainContent.module.css';
export default function MainContent() {
  return (
    <div className={styles.mainContainer}>

      <ProfileCard
        imgUrl={'https://avatars.githubusercontent.com/u/126365920?v=4'}
        name={'Filo Puni Vaesau'}
        role={'Digital Craftsman | Fullstack Developer'}
        location={'San Francisco, Ca'}
        bio={
          'You will never discover new oceans if you do not have courage to lose sight of the shore.'
        }
        banner={
          'https://i.pinimg.com/originals/d4/2b/aa/d42baaecec787840fd2b41fe84c040d8.gif'
        }
      />

      <Title mainTitle={'Getting to know the Backend!'} />
      
      <div>
        <h3>What is Backend Development?</h3>
      </div>

    </div>
  );
}
