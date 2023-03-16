import React from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const handleClick = () => {
    console.log("click btn");
    props.onClick();
  };
  return <button onClick={handleClick}>{props.label}</button>;
};

export default Button;
