"use client"

import Link from "next/link";

import "./WelcomePage.css"; 

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Our Application!</h1>
      <p>We're glad to have you here. Explore our features and get started.</p>
      <div className="button-container">
        <Link href="/signUp" className="btn-primary">
          Sign Up
        </Link>
        <Link href="/logIn" className="btn-secondary">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
