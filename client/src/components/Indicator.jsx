export default function Indicator({
  iterator, clickAction, pagex, pagey, show,
}) {
  return (
    <div className="indicator" style={{ display: show ? 'block' : 'none', top: `${pagey}px`, left: `${pagex}px` }}>
      <ul>
        {Object.entries(iterator).map((key) => (
          <li key={`${key[0]}indicator`} onClick={(event) => clickAction(key[0], event)}>
            <img src={key[1].icon} alt="" />
            <p>{key[0]}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}
