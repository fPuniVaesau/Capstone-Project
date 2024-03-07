import TestForm from './TestForm';
import { useState } from 'react';
export default function Top() {
  const [name, setName] = useState('');

  return (
    <>
      <TestForm name={name} setName={setName} />

      <div>
        <p>Welcome! {name}</p>
      </div>
    </>
  );
}
