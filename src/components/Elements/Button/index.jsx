function Button({variant, children, onClick = () => {}, type = "button"}) {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
