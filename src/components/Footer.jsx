import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="border border-purple-300">
        <h1 className="text-center sm:text-5xl text-2xl font-semibold py-16">
          Faster Websites. Higher conversion. More revenue.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-4 md:px-8 lg:px-16">
        <div className="space-y-6 lg:w-[550px]">
          <h2 className="text-4xl font-semibold">boco</h2>
          <p className="text-gray-500 text-lg font-medium">
            We are driven by quality and we're 0 bullshit. If you think the same
            way, we love a good chat.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 flex sm:justify-end text-left">
          <div className="space-y-2 sm:text-right">
            <h3 className="text-xl font-semibold">Products</h3>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-500 text-lg font-medium">
                  Shopify Store Build
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500 text-lg font-medium">
                  Custom Landing Pages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500 text-lg font-medium">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-full border-t border-gray-200 pt-8 mt-8">
          <p className="text-gray-500">© Copyright, BOCO 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
