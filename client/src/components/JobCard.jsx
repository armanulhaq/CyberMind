const JobCard = ({ job }) => {
    function hoursAgo(dateString) {
        const postDate = new Date(dateString);
        const now = new Date();
        const diff = now - postDate;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        if (hours < 1) {
            return "<1h ago";
        }
        return hours + "h ago";
    }

    return (
        <div className="bg-white rounded-2xl shadow-md p-5 w-[320px] relative flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center bg-gradient-to-b from-[#FEFEFD] to-[#F1F1F1] p-2 rounded-xl">
                    <img
                        src="/Company.png"
                        alt="Company Logo"
                        className="h-11 w-11 rounded-full object-contain bg-white border border-gray-100 shadow"
                    />
                </div>
                <div className="absolute top-4 right-4 bg-[#B0D9FF] text-xs font-medium px-3 py-1 rounded-lg shadow-sm text-[#232323]">
                    {hoursAgo(job.createdAt)}
                </div>
            </div>

            <h2 className="font-bold text-lg text-[#232323]">{job.jobTitle}</h2>

            <div className="flex items-center justify-between text-[#5A5A5A] text-sm">
                <span className="flex items-center gap-1">
                    <img src="/Experience.png" className="h-4" />{" "}
                    {job.experience || "1-3 yr Exp"}
                </span>
                <span className="flex items-center gap-1">
                    <img src="/Site.png" className="h-4" /> {job.jobType}
                </span>
                <span className="flex items-center gap-1">
                    <img src="/CTC.png" className="h-4" /> {job.maxSalary} LPA
                </span>
            </div>

            <div>{job.jobDescription}</div>

            <button className="bg-[#00AAFF] text-white font-semibold py-2 rounded-lg mt-2 transition-colors hover:bg-[#1976d2] cursor-pointer">
                Apply Now
            </button>
        </div>
    );
};

export default JobCard;
