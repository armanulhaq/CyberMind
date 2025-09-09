import { useForm } from "react-hook-form";

export default function CreateJobOpening({ setIsCreateJobOpen }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        await fetch("http://localhost:3000/api/create-job", {
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium">Job Title</label>{" "}
                        {/* track this input under the key jobTitle */}
                        <input
                            type="text"
                            placeholder="Enter the job title"
                            {...register("jobTitle", {
                                required: "Job title is required",
                            })}
                            className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                        />
                        {errors.jobTitle && (
                            <p className="text-red-500 text-sm">
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
                            className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                        />
                        {errors.companyName && (
                            <p className="text-red-500 text-sm">
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
                            <p className="text-red-500 text-sm">
                                {errors.location.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block font-medium">Job Type</label>
                        <select
                            {...register("jobType")}
                            className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                        >
                            <option>Job Type</option>
                            <option>Onsite</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                        </select>
                        {errors.jobType && (
                            <p className="text-red-500 text-sm">
                                {errors.jobType.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block font-medium">
                                Min Salary
                            </label>
                            <input
                                type="number"
                                placeholder="₹0"
                                {...register("minSalary")}
                                className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                            />
                            {errors.minSalary && (
                                <p className="text-red-500 text-sm">
                                    {errors.minSalary.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium">
                                Max Salary
                            </label>
                            <input
                                type="number"
                                placeholder="₹12,00,000"
                                {...register("maxSalary")}
                                className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                            />
                            {errors.maxSalary && (
                                <p className="text-red-500 text-sm">
                                    {errors.maxSalary.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium">
                            Application Deadline
                        </label>
                        <input
                            type="date"
                            {...register("deadline")}
                            className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                        />
                        {errors.deadline && (
                            <p className="text-red-500 text-sm">
                                {errors.deadline.message}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block font-medium">Job Description</label>
                    <textarea
                        rows={4}
                        placeholder="Please share a description..."
                        {...register("jobDescription")}
                        className="w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg px-3 py-2 mt-1"
                    ></textarea>
                    {errors.jobDescription && (
                        <p className="text-red-500 text-sm">
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
                        className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
                    >
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
}
