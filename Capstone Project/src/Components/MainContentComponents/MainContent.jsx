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
        {/* <hr /> */}
        <p>When we use the web and access webpages and applications we are greeted with beautiful layouts, fonts, colors, animations and more. All the hard work that the developers had done is presented to us in a beautiful package.</p>

        <p>
          
        </p>
      </div>

    </div>
  );
}
