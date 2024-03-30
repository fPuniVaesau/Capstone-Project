import ProfileCard from './ProfileCardComponents/ProfileCard';
import Title from './TitleComponents/Title';
import IntroductionSec from './IntroComponents/IntroductionSec';

import styles from './MainContent.module.css';
export default function MainContent() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <ProfileCard
          imgUrl={'https://avatars.githubusercontent.com/u/126365920?v=4'}
          name={'Filo Puni Vaesau'}
          role={'Digital Craftsman | Fullstack Developer'}
          location={'San Francisco, Ca'}
          bio={
            'You will never discover new oceans if you do not have courage to lose sight of the shore.'
          }
          banner={
            'https://i.pinimg.com/originals/fd/56/bc/fd56bcfd76f2c51a75f5fe89b849b718.gif'
          }
        />
      </div>

      <div className={styles.two}>
        <Title mainTitle={'Getting to know the Backend!'} />
      </div>

      <IntroductionSec className={styles.test} />
    </div>
  );
}
