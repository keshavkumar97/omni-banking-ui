const FormButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default FormButton;
