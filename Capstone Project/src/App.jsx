// import './styles.css';
import styles from "./App.module.css"
import MainHeader from './Components/HeaderComponents/MainHeader';
import MainContent from './Components/MainContentComponents/MainContent';
export default function App() {
  return (
    <div className={styles.mainContainer}>
      <header>
        <MainHeader />
      </header>

      <main>
        <MainContent />
      </main>
    </div>
  );
}
