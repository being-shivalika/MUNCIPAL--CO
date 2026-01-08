import { X } from "lucide-react";

export default function SideBarA({
  isOpen,
  setIsOpen,
  menuItems,
  title = "Menu",
}) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-300
        md:relative md:translate-x-0 md:shadow-none md:z-10
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="h-full flex flex-col border-r border-gray-200">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold text-indigo-900">{title}</h2>
            <button className="md:hidden" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
