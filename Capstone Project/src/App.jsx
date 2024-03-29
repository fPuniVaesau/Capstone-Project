import './styles.css';
import styles from './App.modules.css'
import MainHeader from './Components/HeaderComponents/MainHeader';
import MainContent from './Components/MainContentComponents/MainContent';
export default function App() {
  return (
    <>
      <header>
        <MainHeader />
      </header>

      <main>
        <MainContent />
      </main>
    </>
  );
}
