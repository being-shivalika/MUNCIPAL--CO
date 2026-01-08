import React from "react";
import { useOutletContext } from "react-router-dom";
import { ClipboardList, Search, Gavel, FileText, Info } from "lucide-react";
import SideBarA from "../components/SideBarA";
import Posts from "../components/Posts";
import Notifications from "../components/Notifications";

const MainHero = () => {
  const { isSidebarOpen, setSidebarOpen, allRequests } = useOutletContext();

  const mainLinks = [
    { icon: ClipboardList, label: "Complaints", href: "/citizen" },
    { icon: Gavel, label: "New Policies", href: "#" },
    { icon: FileText, label: "Services List", href: "#" },
    { icon: Search, label: "Track Status", href: "#" },
  ];

  return (
    <div className="flex min-h-full">
      <SideBarA
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
        menuItems={mainLinks}
        title="Citizen Portal"
      />

      <div className="flex-1 bg-white min-h-screen pb-20">
        <div className="text-left py-10 ml-10">
          <h1 className="text-amber-950 font-extrabold text-3xl md:text-5xl">
            Welcome to
          </h1>
          <p className="text-gray-500 mt-2">Municipal Corporation Panchkula</p>
        </div>

        <div className="text-center py-10">
          <h1 className="text-amber-950 font-extrabold text-3xl md:text-5xl">
            Online Civic Services
          </h1>
          <p className="text-gray-500 mt-2">Municipal Corporation Panchkula</p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <Posts
              title="Complaint"
              description="Apply for online complaint."
              buttonText="Apply"
            />
            <Posts
              title="Birth Certificate"
              description="Apply for Birth certificate online."
              buttonText="Apply"
            />
            <Posts
              title="Marriage Reg"
              description="Register your marriage certificate."
              buttonText="Apply"
            />
            <Posts
              title="Trade License"
              description="New trade license applications."
              buttonText="Apply"
            />
            <Posts
              title="Property ID"
              description="Search and verify Property ID."
              buttonText="Search"
            />
            <Posts
              title="Trade License"
              description="New trade license applications."
              buttonText="Apply"
            />
            <Posts
              title="Birth Certificate"
              description="Apply for Birth certificate online."
              buttonText="Apply"
            />
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <Notifications requests={allRequests} />
        </div>
      </div>
    </div>
  );
};

export default MainHero;
