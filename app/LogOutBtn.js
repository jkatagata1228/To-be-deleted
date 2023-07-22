"use client";

import { signOut } from "next-auth/react";

const LogOutBtn = () => {
  return (
    <button
      className="logOut-btn"
      onClick={() => {
        signOut();
      }}
    >
      Log Out
    </button>
  );
};

export default LogOutBtn;
