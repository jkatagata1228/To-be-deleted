"use client";

import { signIn } from "next-auth/react";

const LogInBtn = () => {
  return (
    <button
      className="logIn-btn"
      onClick={() => {
        signIn();
      }}
    >
      Log In
    </button>
  );
};

export default LogInBtn;
