import React, { useState } from "react";
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

const AdminDashboard = () => {
  // Pull allRequests from App.jsx via context
  const { isSidebarOpen, setSidebarOpen, allRequests } = useOutletContext();

  const [services, setServices] = useState([
    {
      id: 1,
      title: "Property Tax",
      description:
        "Pay your annual property tax and check outstanding dues online.",
      buttonText: "Manage",
      linkText: "View Schedule",
    },
    {
      id: 2,
      title: "Building Plans",
      description:
        "Submit and track status of new residential or commercial building plans.",
      buttonText: "Review",
      linkText: "Guidelines",
    },
  ]);

  const adminLinks = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Manage Users", href: "#" },
    { icon: FileText, label: "Services List", href: "#" },
    { icon: Mail, label: "Inquiries", href: "#" },
    { icon: Settings, label: "System Settings", href: "#" },
  ];

  const addService = (newService) => {
    const serviceWithId = { ...newService, id: Date.now() };
    setServices([serviceWithId, ...services]);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="flex min-h-full bg-gray-50">
      <SideBarA
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
        menuItems={adminLinks}
        title="Admin Panel"
      />

      <div className="flex-1 p-4 sm:p-6 lg:p-10">
        {/* Pass the actual requests from context to Notifications */}
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
                className="absolute top-2 right-2 z-10 p-2 bg-red-100 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
              >
                <Trash2 size={18} />
              </button>

              <Posts
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                linkText={service.linkText}
                onBtnClick={() => console.log(`Managing ${service.title}`)}
              />
            </div>
          ))}
        </div>

        {services.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p>No active services. Use the form above to create one.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
