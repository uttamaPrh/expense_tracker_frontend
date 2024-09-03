import React from "react";

const Heading = ({ heading }: { heading: string }) => {
  return <div className="text-3xl text-white font-semibold">{heading}</div>;
};

export default Heading;
