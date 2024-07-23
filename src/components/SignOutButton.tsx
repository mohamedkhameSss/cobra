"use client";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button
      onClick={() => signOut()}
      className={buttonVariants({
        size: "sm",
        variant: "ghost",
      })}
    >
      Login
    </Button>
  );
};

export default SignOutButton;
