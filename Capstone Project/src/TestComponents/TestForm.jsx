export default function TestForm({setName, name, setGuestList, guestList}) {
  let handleInput = (e) => {
    setName(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setGuestList([...guestList, name]);
    setName('');
  };

  return (
    <>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor=''>Name</label>
        <input type='text' onChange={handleInput} value={name} />
        <button>Show Name</button>
      </form>
    </>
  );
}
