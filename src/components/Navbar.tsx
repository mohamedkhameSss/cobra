"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { usePathname } from "next/navigation";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = () => {
  const { getUser, isAuthenticated } = useKindeBrowserClient();
  const path = usePathname();
  const user = getUser();
  console.log(path.length);

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav
      className='
    sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200
    bg-white/75 backdrop-blur-lg transition-all
    '
    >
      <MaxWidthWrapper>
        <div
          className='flex h-14 items-center justify-between border-b border-zinc-200
            '
        >
          <Link href='/' className='flex z-40 font-semibold'>
            <span className='text-green-600'>COBRa</span>
          </Link>
          <div className='h-full flex items-center space-x-4'>
            {isAuthenticated ? (
              <>
                <LogoutLink
                  postLogoutRedirectURL='/'
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign out
                </LogoutLink>
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
                {path.length === 1 && (
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
                )}
              </>
            ) : (
              <>
                <LoginLink
                  postLoginRedirectURL='/'
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
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
