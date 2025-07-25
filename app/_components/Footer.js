// Footer.jsx
import React from "react";
import facebook from "@/public/facebook.svg";
import twitter from "@/public/twitter.svg";
import instagram from "@/public/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#002B60] text-white p-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="sm:text-xl text-md font-bold mb-4">Filters</h2>
          <ul className="flex gap-3">
            <li>
              <a href="#" className="hover:underline sm:text-xl text-md">
                All
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline sm:text-xl text-md">
                electronics
              </a>
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h2 className="sm:text-xl text-md font-bold mb-4">About Us</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="sm:pr-30">
          <h2 className="sm:text-xl text-md font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#">
              <Image
                width="40"
                height="40"
                src={facebook}
                alt="Facebook"
                className="sm:w-auto w-8"
              />
            </a>
            <a href="#">
              <Image
                width="40"
                height="40"
                src={twitter}
                alt="Twitter"
                className="sm:w-auto w-8"
              />
            </a>
            <a href="#">
              <Image
                width="40"
                height="40"
                src={instagram}
                alt="Instagram"
                className="sm:w-auto w-8"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4">© 2024 American</div>
    </footer>
  );
};

export default Footer;
