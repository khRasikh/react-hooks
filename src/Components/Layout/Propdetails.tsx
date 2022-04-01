import React from "react";

type value = {
  name: string;
  id: number;
};
const PropsDetails = (props: value) => {
  return (
    <>
      <div>
        <div className="newApp">
          <h2>
            Hello Dear {props.name} with ID#{props.id}, Welcome to TypeScript
            programming!
          </h2>
        </div>
      </div>

      <div className="newBody">
        <p>
          <b>TypeScrit-React: </b>Here you see how I used props Example:
          <hr />
        </p>
        <h2 style={{ color: "green" }}>Welcome dear {props.name}</h2>
      </div>
    </>
  );
};

export default PropsDetails;
