export default function Time() {
  let date = new Date();
  let showTime =
    (date.getHours() % 12) +
    ' | ' +
    date.getMinutes() +
    ' | ' +
    date.getSeconds();
  let showDay = date.getDay();
  let dayOftheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <>
      <h2>This is a time componenet</h2>
      <h3>testing the time</h3>
      <p>{dayOftheWeek[showDay]}</p>
      <p>{showTime}</p>
    </>
  );
}
