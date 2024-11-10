"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import CheckPasswordStrength from "../components/PasswordCheck";
import { v4 as uuidv4 } from "uuid";
import { UsersType } from "../types";
import {  useRouter } from "next/navigation";

import "./signUp.css";

const uui = uuidv4();

const SignUp: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const [strength, setStrength] = useState("Very Weak");
  
  const [user, SetUser] = useState<UsersType>({
    id: uui,
    UserName: "",
    email: "",
    Password: "",
    confirPassword: "",
  });
  const router = useRouter();

  const checkPass = (e: React.MouseEvent | React.ChangeEvent) => {
    e.preventDefault();
    SetUser({ ...user, Password: (e.target as HTMLTextAreaElement).value });

    const PASSStr: string = CheckPasswordStrength(
      (e.target as HTMLTextAreaElement).value
    );

    switch (e.currentTarget.id) {
      case "password":
        SetUser({ ...user, Password: (e.target as HTMLTextAreaElement).value });
        setStrength(PASSStr);
        break;
      case "confirm-password":
        SetUser({
          ...user,
          confirPassword: (e.target as HTMLTextAreaElement).value,
        });
    }

    if (!(e.target as HTMLTextAreaElement).value.length) {
      setError(false);
    }
  };

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    let pass = user.Password;
    let Confirmpass = user.confirPassword;

    if (pass === Confirmpass) {
      setError(false);
    } else setError(true);
    setErrorText("Password Not Match");

    if (!pass.length) {
      setError(true);
      setErrorText("Fill This Area");
    }

    router.push("/logIn");

    
  };

  return (
    <>
      <div className="signup-container">
        <h1>Create an Account</h1>
        <form>
          <div className="input-group">
            <label htmlFor="Username">Username</label>
            <input
              onChange={(e) => {
                SetUser({ ...user, UserName: e.target.value.concat() });
              }}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e: React.ChangeEvent) => {
                SetUser({
                  ...user,
                  email: (e.target as HTMLTextAreaElement).value.concat(),
                });
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>

            <input
              onChange={(e: React.ChangeEvent) => {
                checkPass(e);
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            ></input>
            {strength != "Very Weak" ? (
              <div
                className={`strength ${strength
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {" "}
                Password Strength: {strength}
              </div>
            ) : (
              ""
            )}
            {error && <p className="errorMsg">{errorText}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>

            <input
              onChange={(e: React.ChangeEvent) => {
                checkPass(e);
              }}
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              required
            ></input>
            {error && <p className="errorMsg">{errorText}</p>}
          </div>
          <button onClick={(e: React.MouseEvent) => onSubmit(e)} type="submit">
            Sign Up
          </button>
        </form>
        <span className="login-link">
          Already have an account? <Link href="../logIn">Log In</Link>
        </span>
      </div>
    </>
  );
};

export default SignUp