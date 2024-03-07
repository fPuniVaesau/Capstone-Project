import TestForm from './TestForm';
import TestDisplay from './TestDisplay';
import { useState } from 'react';
export default function Top() {
  const [name, setName] = useState('');

  return (
    <>
      <TestForm name={name} setName={setName} />
      <TestDisplay displayName={name}/>
    </>
  );
}
