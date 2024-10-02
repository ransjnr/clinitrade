/* eslint-disable no-unused-vars */
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <Link to={"/"}>
        <p className="font-bold font-serif text-4xl ml-20 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out cursor-pointer">
          CliniTrade
        </p>
      </Link>

      <ul className="hidden  md:flex gap-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Home
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          New
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Preowned
        </li>
      </ul>

      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Link to={"/profile"}>
            <Button>Submit Listing</Button>
          </Link>
        </div>
      ) : (
        <SignInButton mode="modal" fallbackRedirectUrl="/profile">
          <Button>Submit Listing</Button>
        </SignInButton>
      )}
    </div>
  );
}

export default Header;
