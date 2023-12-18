import React, {useState} from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import {login} from "../../services/auth.service";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      {loginFailed && <p className="text-red-500">{loginFailed}</p>}
      <InputForm
        name="username"
        type="text"
        placeholder="Username"
        label="Username"
      />
      <InputForm
        name="password"
        type="password"
        placeholder="*****"
        label="Password"
      />
      <Button variant="bg-blue-600" type="submit">
        Login
      </Button>
    </form>
  );
}
