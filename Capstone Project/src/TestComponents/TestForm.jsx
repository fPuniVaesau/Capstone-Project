export default function TestForm({setName, name}) {
  let handleInput = (e) => {
    setName(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
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
