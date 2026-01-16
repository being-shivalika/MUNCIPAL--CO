import React from "react";
import { useOutletContext } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  Mail,
  Settings,
  Trash2,
} from "lucide-react";
import SideBarA from "../components/SideBarA";
import Notifications from "../components/Notifications";
import Posts from "../components/Posts";
import CreatePost from "../components/CreatePost";
import Footer from "../components/Footer";

const AdminDashboard = () => {
  const {
    isSidebarOpen,
    setSidebarOpen,
    allRequests,
    services,
    addService,
    deleteService,
  } = useOutletContext();

  const adminLinks = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Users, label: "Manage User Requests", path: "/track" },
    { icon: FileText, label: "Services List", path: "#" },
    { icon: Mail, label: "Inquiries", path: "#" },
    { icon: Settings, label: "Back to Home", path: "/" },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex min-h-full bg-gray-50">
        <SideBarA
          isOpen={isSidebarOpen}
          setIsOpen={setSidebarOpen}
          menuItems={adminLinks}
          title="Admin Panel"
        />
        <div className="flex-1 p-4 sm:p-6 lg:p-10">
          <Notifications requests={allRequests} />
          <div className="max-w-4xl mx-auto mt-10">
            <CreatePost onAddPost={addService} />
          </div>
          <div className="text-center my-10">
            <h1 className="text-3xl md:text-4xl font-black text-amber-950">
              Live Admin Services
            </h1>
            <div className="h-1.5 w-24 bg-amber-600 mx-auto mt-3 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="relative group">
                <button
                  onClick={() => deleteService(service.id)}
                  className="absolute top-2 right-2 z-10 p-2 bg-red-100 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={18} />
                </button>
                <Posts
                  {...service}
                  onBtnClick={() => console.log(`Managing ${service.title}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
{
  /*Admin page uses cfreatepost and posts component*/
}
