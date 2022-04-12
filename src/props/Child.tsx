import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
    children: React.ReactNode;
}

export const Child = ({color, onClick}: ChildProps) => {
  return <div>
      {color}
      <button onClick={onClick}>Click me</button>
  </div>;
};

export const ChildAsFC: React.FC<ChildProps> = (props) => {
  return <div>
      {props.color}
      {props.children}
      <button onClick={props.onClick}>Click me</button>
  </div>;
};
