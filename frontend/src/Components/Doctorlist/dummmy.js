import React from "react";

const Dummy = (props) => {
  const abc = props.data.doctorsdata[0].fullname;
  return (
    <div>
      <h1>{abc}</h1>
    </div>
  );
};

export default Dummy;
