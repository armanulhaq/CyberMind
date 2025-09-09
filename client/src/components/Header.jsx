const Navbar = ({ setIsCreateJobOpen }) => {
    return (
        <nav className="max-w-[95%] lg:max-w-5xl mx-auto my-5 flex items-center justify-between px-6 py-4 border border-[#FCFCFC] shadow-[0_0_8px_rgba(127,127,127,0.15)] rounded-full bg-white">
            <div className="flex items-center">
                <img src="/icon.png" alt="Logo" className="h-10 w-10" />
            </div>

            <ul className="flex items-center gap-20 text-gray-800 font-medium">
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

            <button
                onClick={() => setIsCreateJobOpen(true)}
                className="bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white font-medium px-6 py-2 rounded-full shadow-md hover:opacity-90 transition duration-300 cursor-pointer"
            >
                Create Jobs
            </button>
        </nav>
    );
};

export default Navbar;
