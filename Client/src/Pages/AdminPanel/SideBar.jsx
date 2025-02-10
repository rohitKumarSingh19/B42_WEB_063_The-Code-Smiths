import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Settings, LogOut, Package, Banknote, BarChart, Users, FileText, HelpCircle } from "lucide-react";

const menuItems = [
  { name: "Home", icon: <Home size={22} />, path: "/" },
  { name: "Products", icon: <Package size={22} />, path: "/products" },
  { name: "Orders", icon: <FileText size={22} />, path: "/orders" },
  { name: "Customers", icon: <Users size={22} />, path: "/customers" },
  { name: "Balance", icon: <Banknote size={22} />, path: "/balance" },
  { name: "Bank Account", icon: <Banknote size={22} />, path: "/bank-account" },
  { name: "Reports", icon: <BarChart size={22} />, path: "/reports" },
  { name: "Support", icon: <HelpCircle size={22} />, path: "/support" },
  { name: "Settings", icon: <Settings size={22} />, path: "/settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      animate={{ width: isOpen ? "250px" : "80px" }}
      className="h-screen bg-gray-900 text-white p-5 flex flex-col fixed top-0 left-0 shadow-xl transition-all duration-300"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 p-2 rounded-md self-end text-gray-300 hover:bg-gray-700 transition"
      >
        {isOpen ? "←" : "→"}
      </button>

      {/* Sidebar Menu */}
      <nav className="mt-5 space-y-3 flex-1">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer transition-all"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {item.icon}
            {isOpen && <span className="text-lg">{item.name}</span>}
          </motion.div>
        ))}
      </nav>

      {/* Logout Button */}
      <motion.div
        className="mt-auto flex items-center gap-3 p-3 hover:bg-red-700 rounded-lg cursor-pointer transition-all"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <LogOut size={22} />
        {isOpen && <span className="text-lg">Logout</span>}
      </motion.div>
    </motion.div>
  );
}
