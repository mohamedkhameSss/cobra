"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { signIn, signOut } from "next-auth/react";
import { SafeUser } from "../../types";
interface PropsType {
  currentUser?: SafeUser | null;
}
const Navbar = ({ currentUser }: PropsType) => {
  const isAdmin = currentUser?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='flex z-40 font-semibold'>
            <span className='text-green-600'>COBRa</span>
          </Link>
          <div className='h-full flex items-center space-x-4'>
            {currentUser ? (
              <>
                <Button
                  onClick={() => signOut()}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign out
                </Button>
                {isAdmin ? (
                  <Link
                    href='/dashboard'
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashoard ✨
                  </Link>
                ) : null}
                <Link
                  href='/configure/upload'
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRightIcon className='ml-1.5 h-5 w-5' />
                </Link>
              </>
            ) : (
              <>
                {/* <Button
                  onClick={()=>regi()}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Button> */}
                <Button
                  onClick={() => signIn("google")}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Button>
                <div className='h-8 w-px bg-zinc-200 hidden sm:block'></div>
                <Link
                  href='/configure/upload'
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRightIcon className='ml-1.5 h-5 w-5' />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
