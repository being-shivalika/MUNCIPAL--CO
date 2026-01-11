import React from "react";
import { useOutletContext } from "react-router-dom";
import { ClipboardList, Search, Gavel, FileText, Info } from "lucide-react";
import SideBarA from "../components/SideBarA";
import Posts from "../components/Posts";
import Notifications from "../components/Notifications";
import Footer from "../components/Footer";

const MainHero = () => {
  const { isSidebarOpen, setSidebarOpen, allRequests } = useOutletContext();

  const mainLinks = [
    { icon: ClipboardList, label: "Complaints", href: "/citizen" },
    { icon: Gavel, label: "New Policies", href: "#" },
    { icon: FileText, label: "Services List", href: "#" },
    { icon: Search, label: "Track Status", href: "/Track" },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex min-h-full">
        <SideBarA
          isOpen={isSidebarOpen}
          setIsOpen={setSidebarOpen}
          menuItems={mainLinks}
          title="Citizen Portal"
        />

        <div className="flex-1 bg-white min-h-screen pb-20">
          <div className="mx-4 md:mx-10 mt-5 rounded-2xl p-6 md:p-10 bg-[url(image.avif)] bg-cover bg-center min-h-50 md:min-h-75 max-w-350 flex flex-col justify-end shadow-inner">
            <h1 className="text-blue-50 font-extrabold text-3xl md:text-5xl lg:text-6xl text-shadow-lg/50 tracking-wide">
              Welcome to
            </h1>
            <p className="text-white mt-1">Municipal Corporation Panchkula</p>
          </div>

          <div className="text-center py-10">
            <h1 className="text-amber-950 font-extrabold text-3xl md:text-5xl">
              Online Civic Services
            </h1>
            <p className="text-gray-500 mt-2">
              Municipal Corporation Panchkula
            </p>
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
          <div className="flex justify-center pt-15">
            <Notifications requests={allRequests} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainHero;
