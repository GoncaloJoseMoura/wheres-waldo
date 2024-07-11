export default function Label({ iterator, find, image }) {
  return (
    <>

      {Object.entries(iterator).map((key) => (
        <p
          key={key[0]}
          className="found"
          style={{
            position: 'absolute',
            display: find.indexOf(key[0]) === -1 ? 'block' : 'none',
            top: image === null ? key[1].y_min : (key[1].y_min + key[1].y_max) / 2 * image.offsetHeight,
            left: image === null ? key[1].x_min : (key[1].x_min + key[1].x_max) / 2 * image.offsetWidth,
          }}
        >
          {key[0]}
        </p>
      ))}
    </>
  );
}
