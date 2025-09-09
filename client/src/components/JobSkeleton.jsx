const JobSkeleton = () => {
    return (
        <div className="min-h-[35vh] animate-pulse bg-gray-200 rounded-2xl shadow-md p-4 h-48 flex flex-col justify-between">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mt-4"></div>
            <div className="h-8 bg-gray-300 rounded mt-6"></div>
        </div>
    );
};

export default JobSkeleton;
