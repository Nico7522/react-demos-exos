export default function ({ station, departures }) {
 
  const departuresJSX = departures.map((d) => (
    <li key={d.id}>
      {d.destination}
      {d.delay}
    </li>
  ));
  return (
    <div>
      <h2>{station}</h2>
      <ul>{departuresJSX}</ul>
    </div>
  );
}
