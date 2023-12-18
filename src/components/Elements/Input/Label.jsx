export default function Label({htmlFor, children}) {
  return (
    <label htmlFor={htmlFor} className="text-slate-700 text-sm font-semibold">
      {children}
    </label>
  );
}
