

function Card(props) {
  return (
    <div className="container rounded-lg bg-sky-600 mx-auto flex items-center justify-center">
      <h1>{props.title}</h1>
      <div className="rounded-full flex items-center justify-center bg-sky-600 text-white h-12 w-12">
        {props.children}

      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
