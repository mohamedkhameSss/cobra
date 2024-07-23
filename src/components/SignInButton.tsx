"use client";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { signIn } from "next-auth/react";
type ButtonVariant =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost";

const SignInButton = ({ variant }: { variant: ButtonVariant }) => {
  return (
    <Button
      onClick={() => signIn("google")}
      className={buttonVariants({
        size: "sm",
        variant: `${variant}`,
      })}
    >
      Login
    </Button>
  );
};

export default SignInButton;
