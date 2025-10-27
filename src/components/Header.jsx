/* eslint-disable no-unused-vars */
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const { user, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center shadow-sm p-3 md:p-5">
      <Link to={"/"}>
        <p className="font-bold font-serif text-xl md:text-2xl lg:text-4xl ml-4 md:ml-12 lg:ml-20 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out cursor-pointer">
          CliniTrade
        </p>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 lg:gap-16">
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

      {/* Desktop User Actions */}
      {isSignedIn ? (
        <div className="hidden md:flex items-center gap-3 lg:gap-5">
          <UserButton />
          <Link to={"/profile"}>
            <Button className="hidden lg:block">Submit Listing</Button>
            <Button className="lg:hidden" size="sm">
              Submit
            </Button>
          </Link>
        </div>
      ) : (
        <div className="hidden md:block">
          <SignInButton mode="modal" fallbackRedirectUrl="/profile">
            <Button>Submit Listing</Button>
          </SignInButton>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <p className="font-bold font-serif text-2xl text-blue-600">
                CliniTrade
              </p>
              <button onClick={() => setIsMenuOpen(false)}>
                <HiX className="text-2xl" />
              </button>
            </div>
            <ul className="flex flex-col gap-6 p-6">
              <li className="font-medium text-lg hover:text-primary cursor-pointer">
                Home
              </li>
              <li className="font-medium text-lg hover:text-primary cursor-pointer">
                Search
              </li>
              <li className="font-medium text-lg hover:text-primary cursor-pointer">
                New
              </li>
              <li className="font-medium text-lg hover:text-primary cursor-pointer">
                Preowned
              </li>
              <div className="border-t pt-6 mt-6">
                {isSignedIn ? (
                  <div className="flex flex-col gap-4">
                    <UserButton />
                    <Link to={"/profile"}>
                      <Button className="w-full">Submit Listing</Button>
                    </Link>
                  </div>
                ) : (
                  <SignInButton mode="modal" fallbackRedirectUrl="/profile">
                    <Button className="w-full">Sign In</Button>
                  </SignInButton>
                )}
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
