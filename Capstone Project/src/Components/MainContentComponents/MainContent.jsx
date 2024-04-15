// imported modules
import ProfileCard from './ProfileCardComponents/ProfileCard';
import Title from './TitleComponents/Title';
import IntroductionSec from './IntroComponents/IntroductionSec';
import BackendArchitecture from './BackendArchitectureComponents/BackendArchitecture';
import ServerInfo from './ServerInfoComponents/ServerInfo';
import DatabaseInfo from './DatabaseComponents/DatabaseInfo';
import ApplicationInfo from './ApplicationComponents/ApplicationInfo';
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

      <div className={styles.title}>
        <Title mainTitle={'Getting to know the Backend!'} />
      </div>

      <div className={styles.introductionContainer}>
        <IntroductionSec className={styles.test} />
      </div>

      <div className={styles.BackendArchitectureContainer}>
        <BackendArchitecture />
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
      
    </div>
  );
}
