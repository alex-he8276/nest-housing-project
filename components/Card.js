import { Fragment } from "react";


function Card(props) {
  return (
    <Fragment>
      <div className="p-3 mr-4 bg-indigo-600 text-white rounded-full">
        {props.children}
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-900">{props.title}</p>
        <p className="text-sm font-normal text-gray-800">{props.description}</p>
      </div>
    </Fragment>
  );
}

export default Card;
