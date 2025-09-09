import { useForm } from "react-hook-form";

export default function CreateJobOpening() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
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
                            placeholder="Full Stack Developer, Frontend Developer, Backend Developer"
                            {...register("jobTitle", {
                                required: "Job title is required",
                            })}
                            className="w-full border rounded-lg px-3 py-2 mt-1"
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
                            className="w-full border rounded-lg px-3 py-2 mt-1"
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
                            className="w-full border rounded-lg px-3 py-2 mt-1"
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
                            className="w-full border rounded-lg px-3 py-2 mt-1"
                        >
                            <option>Job Type</option>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Internship</option>
                            <option>Remote</option>
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
                                className="w-full border rounded-lg px-3 py-2 mt-1"
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
                                className="w-full border rounded-lg px-3 py-2 mt-1"
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
                            className="w-full border rounded-lg px-3 py-2 mt-1"
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
                        className="w-full border rounded-lg px-3 py-2 mt-1"
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
                        className="border px-4 py-2 rounded-lg hover:bg-gray-100"
                    >
                        Save Draft
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Publish »
                    </button>
                </div>
            </form>
        </div>
    );
}
