import React from "react";
import { ClipboardList } from "lucide-react";

const Notifications = ({ requests = [] }) => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-0">
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className="p-6">
          <h2 className="font-bold text-xl md:text-2xl text-center text-amber-950 underline underline-offset-8 mb-6">
            Citizen Requests
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {requests.length > 0 ? (
              requests.map((req) => (
                <div
                  key={req.id}
                  className="bg-amber-400/10 border border-amber-200 p-5 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <p className="font-bold text-amber-900 underline underline-offset-4 mb-2">
                      {req.subject}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {req.message}
                    </p>
                  </div>
                  <button className="bg-indigo-900 p-2 text-white rounded-md">
                    <ClipboardList size={20} />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-gray-500 italic">
                No new requests from citizens.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
