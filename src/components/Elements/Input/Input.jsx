export default function Input({type, placeholder, name, id}) {
  return (
    <input
      type={type}
      className="text-sm border rounded-sm py-2 px-3 text-slate-700 placeholder:opacity-80"
      placeholder={placeholder}
      name={name}
      id={id}
    />
  );
}
