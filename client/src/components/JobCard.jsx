const JobCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 w-[320px] relative flex flex-col gap-3">
            <div className="flex items-center gap-3 mt-1 ">
                <div className="flex items-center gap-3 bg-gradient-to-b from-[#FEFEFD] to-[#F1F1F1] p-2 rounded-xl ">
                    <img
                        src="/Amazon.png"
                        alt="Amazon Logo"
                        className="h-11 w-11 rounded-full object-contain bg-[#fff] border border-gray-100 shadow"
                    />
                </div>
                <div className="absolute top-4 right-4 bg-[#B0D9FF] text-xs px-3 py-1 rounded-lg shadow-sm">
                    24h Ago
                </div>
            </div>
            <div>
                <h2 className="font-bold text-lg text-[#232323]">
                    Full Stack Developer
                </h2>
            </div>
            {/* Meta: Experience, Mode, Salary */}
            <div className="flex gap-4 items-center text-[#5A5A5A] text-sm mt-2">
                <span className="flex items-center gap-1">
                    <img src="/Experience.png" className="h-3" /> 1-3 yr Exp
                </span>
                <span className="flex items-center gap-1">
                    <img src="/Site.png" className="h-3" /> Onsite
                </span>
                <span className="flex items-center gap-1">
                    <img src="/CTC.png" className="h-3" /> 12LPA
                </span>
            </div>
            {/* Description */}
            <ul className="text-[#555555] text-sm list-disc list-inside mt-1 mb-2 pl-1">
                <li>
                    A user-friendly interface lets you browse stunning photos
                    and videos
                </li>
                <li>
                    Filter destinations based on interests and travel style, and
                    create personalized
                </li>
            </ul>
            <button className="bg-[#00AAFF] text-white font-semibold py-2 rounded-lg mt-2 transition-colors hover:bg-[#1976d2] cursor-pointer">
                Apply Now
            </button>
        </div>
    );
};

export default JobCard;
