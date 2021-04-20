import React from "react";
import { HP } from "../../services/HP";

export default function Card({ style, children, center}) {
  let custom = {
    position: "relative",
    borderRadius: 7,
    padding: 10,
    margin: 5,
    boxShadow: "0px 1px 1px rgba(10, 10, 10, .2)",
  };

  if(center !== undefined){
    let centerStyle = {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    }

    custom = HP.combineStyles(custom, centerStyle);
  }
  
  return <div style={HP.combineStyles(custom, style)}>{children}</div>;
}
