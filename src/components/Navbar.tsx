"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
<<<<<<< HEAD
import {
  LoginLink,
  useKindeBrowserClient,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = () => {
  const { isAuthenticated, getUser } = useKindeBrowserClient();

  // useKindeBrowserClient()
  const user = getUser();
  console.log(user);
  // const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;
=======
import { SafeUser } from "../../types";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";

import { authOptions } from "@/lib/providers";
import { getServerSession } from "next-auth";


const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.email === process.env.ADMIN_EMAIL;
  console.log(session + " is admin");
>>>>>>> 3d662cfbcd20407eeb1bac4ab8cde3f2ffe6c6d4

  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='flex z-40 font-semibold'>
            <span className='text-green-600'>COBRa</span>
          </Link>
          <div className='h-full flex items-center space-x-4'>
<<<<<<< HEAD
            {isAuthenticated ? (
              <>
                <LogoutLink
                  // href='/api/auth/logout'
                  postLogoutRedirectURL='/'
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign out
                </LogoutLink>
=======
            {session ? (
              <>
                <SignOutButton />
>>>>>>> 3d662cfbcd20407eeb1bac4ab8cde3f2ffe6c6d4
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
<<<<<<< HEAD
                <LoginLink
                  // href='/api/auth/register'
                  postLoginRedirectURL='/'
=======
                {/* <Button
                  onClick={()=>regi()}
>>>>>>> 3d662cfbcd20407eeb1bac4ab8cde3f2ffe6c6d4
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
<<<<<<< HEAD
                </LoginLink>
                <Link
                  href='/api/auth/login'
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>
=======
                </Button> */}
                <SignInButton variant='ghost' />
>>>>>>> 3d662cfbcd20407eeb1bac4ab8cde3f2ffe6c6d4
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
