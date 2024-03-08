import TestForm from './TestForm';
import TestDisplay from './TestDisplay';
import { useState } from 'react';
import styles from "./Top.module.css"

export default function Top() {
  const [name, setName] = useState('');
  const [guestlist, setGuestList] = useState([]);

  return (
    <div className={styles.container}>
      <TestForm
        name={name}
        setName={setName}
        setGuestList={setGuestList}
        guestList={guestlist}
      />
      <TestDisplay guestList={guestlist} />
    </div>
  );
}
