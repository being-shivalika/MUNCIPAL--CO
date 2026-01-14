import React, { useState } from "react";
import { Send } from "lucide-react";

const SubmitRequest = ({ onSubmitRequest }) => {
  const [formData, setFormData] = useState({ subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitRequest({
      subject: formData.subject,
      message: formData.message,
    });
    setFormData({ subject: "", message: "" });
    alert("Complaint Submitted and Saved!");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-2xl mx-auto">
      <h3 className="text-lg font-bold text-amber-950 mb-4">
        Register a complaint
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-bold text-gray-700">Subject</label>
          <input
            className="w-full border-2 border-gray-100 p-2 rounded-lg text-slate-900 focus:border-amber-500 outline-none"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            placeholder="e.g., Water Leakage in Sector 5"
            required
          />
        </div>
        <div>
          <label className="text-sm font-bold text-gray-700">
            Detailed Message
          </label>
          <textarea
            className="w-full border-2 border-gray-100 p-2 rounded-lg text-slate-900 focus:border-amber-500 outline-none h-28"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Explain your issue here..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-600 text-white font-bold py-3 rounded-lg hover:bg-amber-700 flex justify-center items-center gap-2"
        >
          <Send size={18} /> Send Request
        </button>
      </form>
    </div>
  );
};

export default SubmitRequest;
