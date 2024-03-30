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
        <p>
          When we use the web and access webpages and applications we are
          greeted with beautiful layouts, fonts, colors, animations and more.
          All the hard work that the developers had done is presented to us in a
          beautiful package.
        </p>

        <p>
          When we press buttons on the page, they do something, when we are
          signing up for memberships or filling out a form, does something.
          Whenever we interact with the web page, it does something. But what is
          that something and how does it work? 
        </p>

        <p>
        Where does that information that
          I provided for that form go? Why is information on a page being
          displayed when I press this button? These are some of the questions
          that I asked when starting my journey into web development.
        </p>
      </div>
    </div>
  );
}
