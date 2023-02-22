export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      {...props}
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
      text-center
      justify-center
      
      active:shadow-sm 
      hover:shadow-md 
      hover:border-gray-400 
      "
    >
      {props.children}
    </button>
  );
};
