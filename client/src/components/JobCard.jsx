const JobCard = ({ job }) => {
    function hoursAgo(dateString) {
        const postDate = new Date(dateString);
        const now = new Date();
        const diff = now - postDate;
        console.log(diff);
        if (diff < 60 * 60 * 1000) {
            return "Just now";
        }
        return Math.floor(diff / (1000 * 60 * 60)) + "h ago";
    }

    function LPA(salary) {
        return salary / 100000;
    }
    console.log(job.createdAt);
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-5 justify-between relative flex flex-col gap-4 shadow-[0px_0px_14px_0px_rgba(211,211,211,0.15)]">
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

            <div className="flex flex-col">
                <h2 className="font-bold text-lg text-[#232323]">
                    {job.jobTitle}
                </h2>
                <div className="text-sm text-[#232323]">{job.companyName}</div>
            </div>

            <div className="flex items-center justify-between text-[#5A5A5A] text-sm">
                <span className="flex items-center gap-1">
                    <img src="/Experience.png" className="h-4" />{" "}
                    {job.experience || "1-3 yr Exp"}
                </span>
                <span className="flex items-center gap-1">
                    <img src="/Site.png" className="h-4" /> {job.jobType}
                </span>
                <span className="flex items-center gap-1">
                    <img src="/CTC.png" className="h-4" /> {LPA(job.maxSalary)}
                    LPA
                </span>
            </div>

            <div className="text-sm text-[#5A5A5A] line-clamp-3">
                {job.jobDescription}
            </div>

            <button className="bg-[#00AAFF] text-white py-2 rounded-lg mt-2 transition-colors hover:bg-[#1976d2] cursor-pointer">
                Apply Now
            </button>
        </div>
    );
};

export default JobCard;
