import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col gap-4">
      <h1 className="font-bold text-3xl text-red-800 tracking-wider">Ooppss</h1>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="font-normal text-lg text-slate-800">
          Sorry, an unexpected error has occured
        </p>
        <p className="font-normal text-lg text-slate-800">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
}
