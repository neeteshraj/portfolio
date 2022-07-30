import React from "react";
const Pre = (props: { load: any }) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default Pre;
