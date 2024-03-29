import ProfileCard from '../ProfileCardComponents/ProfileCard.jsx';
import Hero from './HeroComponents/Hero.jsx';
import IntroSection from './IntroComponents/IntroSection.jsx';
import styles from './Main.module.css';

export default function Main() {
  return (
    <>
      <div className={styles.top}>
        <ProfileCard
          profilePic={
            'https://images.unsplash.com/photo-1703533136832-2e91ef1a746f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'
          }
          location={'San Francisco, Ca'}
          name='Filo Puni Vaesau'
          role={'Digital Craftsman | Full Stack Developer'}
          bio={
            '"You shall, I question not, find a way to the top if you diligently seek for it; for nature hath placed nothing so high that it is out of the reach of industry and valor. -Alexander The Great"'
          }
          CardBanner={'https://i.redd.it/sni0noeuz6311.gif'}
        />
        <Hero />
      </div>
      {/* This is the begining of the main content */}
      <div>
        <IntroSection />
      </div>
    </>
  );
}
