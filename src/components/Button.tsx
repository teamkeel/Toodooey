import { PropsWithChildren } from "react";

export const Button = (
  props: PropsWithChildren & {
    onClick?: () => void;
  }
) => {
  return (
    <a
      href="#"
      onClick={props.onClick}
      className="
      bg-white 
      p-2 
      px-4 
      border 
      border-gray-300 
      rounded-md 
      shadow-sm 
      transition-shadow 
      flex 
      items-center
      
      active:shadow-sm 
      hover:shadow-md 
      hover:border-gray-400 
      "
    >
      {props.children}
    </a>
  );
};
