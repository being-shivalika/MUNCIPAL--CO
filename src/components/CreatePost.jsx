import React, { useState } from "react";

const CreatePost = ({ onAddPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    buttonText: "Apply Now",
    linkText: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost(formData);
    setFormData({
      title: "",
      description: "",
      buttonText: "Apply Now",
      linkText: "",
    });
  };

  const inputStyle =
    "w-full border-2 border-gray-200 p-2.5 rounded-lg text-slate-900 bg-white placeholder:text-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all font-medium";

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 mb-10">
      <h2 className="text-2xl font-bold text-amber-950 mb-6">
        Create New Service Post
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-700">
            Service Title
          </label>
          <input
            className={inputStyle}
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="e.g., Waste Management"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-700">
            Button Label
          </label>
          <input
            className={inputStyle}
            value={formData.buttonText}
            onChange={(e) =>
              setFormData({ ...formData, buttonText: e.target.value })
            }
            placeholder="Apply Now"
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-bold text-slate-700">
            Service Description
          </label>
          <textarea
            className={`${inputStyle} h-32 resize-none`}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Provide details about the civic service..."
            required
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-amber-600 text-white font-bold py-3.5 rounded-xl hover:bg-amber-700 active:scale-[0.98] transition-all shadow-sm shadow-amber-200"
        >
          Publish to Dashboard
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
