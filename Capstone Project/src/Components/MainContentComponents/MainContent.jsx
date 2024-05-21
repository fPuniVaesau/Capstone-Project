// imported modules
import ProfileCard from './ProfileCardComponents/ProfileCard';
import Title from './TitleComponents/Title';
import IntroductionSec from './IntroComponents/IntroductionSec';
import BackendArchitecture from './BackendArchitectureComponents/BackendArchitecture';
import ServerInfo from './ServerInfoComponents/ServerInfo';
import DatabaseInfo from './DatabaseComponents/DatabaseInfo';
import ApplicationInfo from './ApplicationComponents/ApplicationInfo';
import Banner from './BannerComponents/Banner';
import Resources from './Resources/Resources';
// imported style module
import styles from './MainContent.module.css';

export default function MainContent() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.profileContainer}>
        <ProfileCard
          imgUrl={'https://avatars.githubusercontent.com/u/126365920?v=4'}
          firstName={'Filo'}
          lastName={'Vaesau'}
          role={'Digital Craftsman | Developer'}
          location={'San Francisco, Ca'}
          bio={
            '" You will never discover new oceans if you do not have courage to lose sight of the shore. "'
          }
        />
      </div>

      {/* <div className={styles.title}>
        <Title mainTitle={'Backend?'} />
      </div> */}

      <div className={styles.introductionContainer}>
        <IntroductionSec className={styles.test} />
      </div>

      <div className={styles.BackendArchitectureContainer}>
        <BackendArchitecture />
      </div>

      <div className={styles.bannerContainer}>
          <Banner bannerImage={"https://res.cloudinary.com/practicaldev/image/fetch/s--udbxvPC---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pi9le9v004gzqdqo65p8.gif"} />
      </div>

      <div className={styles.serverContainer}>
        <ServerInfo />
      </div>

      <div className={styles.databaseContainer}>
        <DatabaseInfo />
      </div>

      <div className={styles.applicationInfoContainer}>
        <ApplicationInfo />
      </div>

      <div>
        <Resources />
      </div>
    </div>
  );
}
