import React from "react";
import { useOutletContext } from "react-router-dom";
import SideBarA from "../components/SideBarA";
import SubmitRequest from "../components/SubmitRequest";
import Footer from "../components/Footer";
import { User, ClipboardList, MessageSquare } from "lucide-react";

const CitizenDashboard = () => {
  const { isSidebarOpen, setSidebarOpen, handleNewRequest } =
    useOutletContext();

  const citizenLinks = [
    { icon: User, label: "My Profile", href: "#" },
    { icon: ClipboardList, label: "My Complaints", href: "/Track" },
    { icon: MessageSquare, label: "Feedback", href: "#" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <SideBarA
          isOpen={isSidebarOpen}
          setIsOpen={setSidebarOpen}
          menuItems={citizenLinks}
          title="Citizen Portal"
        />
        <main className="flex-1 p-8 bg-gray-100">
          <h1 className="text-3xl font-black text-amber-950 mb-8 text-center">
            Register your issues here
          </h1>
          <SubmitRequest onSubmitRequest={handleNewRequest} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CitizenDashboard;
