import { useForm } from "react-hook-form";

export default function CreateJobOpening({ setIsCreateJobOpen }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/create-job`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        setIsCreateJobOpen(false);
        window.location.reload();
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Create Job Opening
            </h2>

            <div className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium">Job Title</label>
                        <input
                            type="text"
                            placeholder="Enter the job title"
                            {...register("jobTitle", {
                                required: "Job title is required",
                            })}
                            className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                        />
                        {errors.jobTitle && (
                            <p className="text-red-500 ml-2 text-xs">
                                {errors.jobTitle.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block font-medium">
                            Company Name
                        </label>
                        <input
                            type="text"
                            placeholder="Amazon, Microsoft, Swiggy"
                            {...register("companyName", {
                                required: "Company name is required",
                            })}
                            className="w-full border text-[16px] border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                        />
                        {errors.companyName && (
                            <p className="text-red-500 ml-2 text-xs">
                                {errors.companyName.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium">Location</label>
                        <select
                            {...register("location", {
                                required: "Location is required",
                            })}
                            className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                        >
                            <option value="">Choose Preferred Location</option>
                            <option>Bengaluru</option>
                            <option>Hyderabad</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Chennai</option>
                            <option>Pune</option>
                        </select>
                        {errors.location && (
                            <p className="text-red-500 ml-2 text-xs">
                                {errors.location.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block font-medium">Job Type</label>
                        <select
                            {...register("jobType", {
                                required: "Job title is required",
                            })}
                            className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                        >
                            <option value="">Job Type</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Internship</option>
                            <option>Contract</option>
                        </select>
                        {errors.jobType && (
                            <p className="text-red-500 ml-2 text-xs">
                                {errors.jobType.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block font-medium text-gray-600">
                                Salary Range
                            </label>
                            <div className="relative mt-1">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                                    <img
                                        src="UpDown.png"
                                        alt="UpDown"
                                        className="h-3"
                                    />
                                </span>
                                <input
                                    type="number"
                                    placeholder="0"
                                    {...register("minSalary", {
                                        required: "Min. salary is required",
                                    })}
                                    className="w-full pl-8 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>
                            {errors.minSalary && (
                                <p className="text-red-500 ml-2 text-xs">
                                    {errors.minSalary.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-transparent">
                                Max Salary
                            </label>
                            <div className="relative mt-1">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                                    <img
                                        src="UpDown.png"
                                        alt="UpDown"
                                        className="h-3"
                                    />
                                </span>
                                <input
                                    type="number"
                                    placeholder="12,00,000"
                                    {...register("maxSalary", {
                                        required: "Max. salary is required",
                                    })}
                                    className="w-full border pl-8 border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>
                            {errors.maxSalary && (
                                <p className="text-red-500 ml-2 text-xs">
                                    {errors.maxSalary.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-600">
                            Application Deadline
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="date"
                                {...register("deadline", {
                                    required: "Deadline is required",
                                })}
                                className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 [&::-webkit-calendar-picker-indicator]:opacity-0"
                            />
                            <img
                                src="/Calendar.png"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                            />
                        </div>
                        {errors.deadline && (
                            <p className="text-red-500 ml-2 text-xs">
                                {errors.deadline.message}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block font-medium">Job Description</label>
                    <textarea
                        rows={4}
                        placeholder="Please share a description to let the candidate know more about the job role"
                        {...register("jobDescription", {
                            required: "Job description is required",
                        })}
                        className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                    ></textarea>
                    {errors.jobDescription && (
                        <p className="text-red-500 ml-2 text-xs">
                            {errors.jobDescription.message}
                        </p>
                    )}
                </div>

                <div className="flex justify-between mt-6">
                    <button
                        type="button"
                        className="border flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                    >
                        Save Draft{" "}
                        <span>
                            <img
                                src="/Down.png"
                                alt="Down Arrow"
                                className="h-2"
                            />
                        </span>
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit(onSubmit)}
                        className="bg-[#00AAFF] text-white px-8 py-2 rounded-lg hover:bg-[#1976d2] cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <span>Publish</span>
                            <span>
                                <img
                                    src="/Left.png"
                                    alt="Left Arrow"
                                    className="h-2"
                                />
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
