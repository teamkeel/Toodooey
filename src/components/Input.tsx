export const Input = (props: JSX.IntrinsicElements["input"]) => {
  return (
    <input
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
	  w-96

	  active:shadow-sm 
	  hover:shadow-md 
	  hover:border-gray-400 
	  "
    />
  );
};
