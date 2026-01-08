import { useOutletContext } from "react-router-dom";
import { User, ClipboardList, MessageSquare } from "lucide-react";
import SideBarA from "../components/SideBarA";
import SubmitRequest from "../components/SubmitRequest";
import Posts from "../components/Posts";

const CitizenDashboard = () => {
  const { isSidebarOpen, setSidebarOpen, handleNewRequest } =
    useOutletContext();

  const citizenLinks = [
    { icon: User, label: "My Profile", href: "/citizen/profile" },
    {
      icon: ClipboardList,
      label: "My Complaints",
      href: "/citizen/complaints",
    },
    { icon: MessageSquare, label: "Feedback", href: "/citizen/feedback" },
  ];

  return (
    <div className="flex h-full bg-gray-100 overflow-hidden relative">
      <SideBarA
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
        menuItems={citizenLinks}
        title="Citizen Portal"
      />

      <main className="flex-1 overflow-y-auto p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-black text-amber-950 mb-8 text-center md:text-center">
            Register your issues here
          </h1>

          <SubmitRequest onSubmitRequest={handleNewRequest} />

          <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-100">
            <h2 className="text-lg font-bold text-amber-900 mb-2">
              Portal Status
            </h2>
            <p className="text-sm text-amber-800">
              Welcome to the MC Panchkula digital portal. You can use the form
              above to submit direct requests or grievances to the municipal
              admin.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CitizenDashboard;
