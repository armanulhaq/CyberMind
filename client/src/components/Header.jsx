import React from "react";

const Navbar = () => {
    return (
        <nav className="max-w-4xl mx-auto my-5 flex items-center justify-between px-8 py-4 border border-[#FCFCFC] shadow-[0_0_20px_rgba(127,127,127,0.15)]  bg-white rounded-full">
            <div className="flex items-center">
                <img src="/icon.png" alt="Logo" className="h-8 w-8" />
            </div>

            <ul className="flex items-center gap-8 text-gray-800 font-medium">
                <li className="hidden lg:block cursor-pointer hover:text-[#A128FF]">
                    Home
                </li>
                <li className="cursor-pointer hover:text-[#A128FF]">
                    Find Jobs
                </li>
                <li className="cursor-pointer hover:text-[#A128FF]">
                    Find Talents
                </li>
                <li className="hidden lg:block cursor-pointer hover:text-[#A128FF]">
                    About us
                </li>
                <li className="hidden lg:block cursor-pointer hover:text-[#A128FF]">
                    Testimonials
                </li>
            </ul>

            <button className="bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white font-medium px-6 py-2 rounded-full shadow-md hover:opacity-90 transition duration-300">
                Create Jobs
            </button>
        </nav>
    );
};

export default Navbar;
