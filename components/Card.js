

function Card(props) {
  return (
    <div className="container h-40 rounded-lg bg-sky-600 mx-auto flex items-center justify-center flex-col p-8">
      <h1 className="flex">{props.title}</h1>
      <div className="rounded-full flex items-center justify-center bg-sky-600 text-white h-12 w-12">
        {props.children}
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
