import React from "react";

const Notifications = ({ requests }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-xl font-bold text-amber-950 mb-4 underline">
        Live Request Status
      </h2>
      <div className="space-y-3">
        {!requests || requests.length === 0 ? (
          <p className="text-gray-500 italic">No recent requests found.</p>
        ) : (
          requests.map((req) => (
            <div
              key={req.id}
              className="bg-white border border-gray-200 p-4 rounded-lg flex justify-between items-center shadow-sm"
            >
              <div>
                <p className="font-bold text-indigo-900">{req.subject}</p>
                <p className="text-sm text-gray-600">{req.message}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-300">
                {req.status || "Pending"}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
