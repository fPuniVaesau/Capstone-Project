import TestForm from './TestForm';
import TestDisplay from './TestDisplay';
import { useState } from 'react';

export default function Top() {
  const [name, setName] = useState('');
  const [guestlist, setGuestList] = useState([]);

  return (
    <>
      <TestForm
        name={name}
        setName={setName}
        setGuestList={setGuestList}
        guestList={guestlist}
      />
      <TestDisplay guestList={guestlist} />
    </>
  );
}
