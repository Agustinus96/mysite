import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="z-40 w-full h-20 bg-emerald-800 top-0 bg-opacity-30 fixed">
        <div className="mx-auto px-4 h-full">
          <div className="flex justify-center items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="#about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="#services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="#contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
