import React from "react";
import {Link} from "react-router-dom";

export default function AuthLayouts({title, children, type}) {
  return (
    <div className="flex justify-center min-h-screen items-center overflow-hidden">
      <div className="w-full max-w-xs flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-slate-900 text-3xl tracking-wide">
            {title}
          </h1>
          <p className="font-normal text-slate-700 text-base">
            Welcome, please enter your details
          </p>
        </div>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
}

function Navigation({type}) {
  if (type === "login") {
    return (
      <p className="font-normal text-sm text-slate-600 tracking-wide text-center">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-blue-500 hover:text-blue-300"
        >
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="font-normal text-sm text-slate-600 tracking-wide text-center">
        Have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-500 hover:text-blue-300"
        >
          Sign In
        </Link>
      </p>
    );
  }
}
