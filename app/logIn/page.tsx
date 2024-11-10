"use client"
import  Link from "next/link";
import { useState } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { userLogedIn } from "../Recoil";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import "./LogIn.css";

const LogIn: React.FC = () => {
  const [user, SeUserAuthorized] = useState<boolean | null>();

  const [UsernameInputValue, setUsernameInputValue] = useState<string>("");
  const [PasswordInputValue, setPasswordInputValue] = useState<string>("");
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean>(false);

  const { register } = useForm();
  const router = useRouter();
  let userstr = localStorage.getItem("UserInfo");
  let RegisteredUser = null;

  if (userstr) {
    RegisteredUser = JSON.parse(userstr);
  }

  const CheckCorrectly = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setError((prev) => !prev);

    if (
      (UsernameInputValue === RegisteredUser.UserName ||
        UsernameInputValue === RegisteredUser.email) &&
      PasswordInputValue === RegisteredUser.Password
    ) {
      setCorrect(true);
      SeUserAuthorized(true);
      setUsernameInputValue("");
      setPasswordInputValue("");
      router.push("/privatePage");
    } else {
      setError(true);
      setCorrect(false);
      setUsernameInputValue("");
      setPasswordInputValue("");
    }
  };

  return (
    <>
        <div className="login-container">
          <h1>Login</h1>
          <form>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input
                {...register("username")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUsernameInputValue(e.target.value);
                }}
                placeholder="Enter Username or Email"
                type="text"
                id="username"
              ></input>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                {...register("password")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPasswordInputValue(e.target.value);
                }}
                placeholder="Enter Password"
                type="password"
                id="password"
              ></input>
            </div>
            <button onClick={CheckCorrectly} type="submit">
              Log In
            </button>
          </form>
          {error && !correct ? (
            <span className="errMessg">Email or Password is not correct</span>
          ) : null}
          <span>
            You are not member? Join Now <Link href="/signUp">Sign Up</Link>
          </span>
        </div>
    </>
  );
};

export default LogIn;
