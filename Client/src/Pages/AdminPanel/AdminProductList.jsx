import React from "react";
import Sidebar from "./SideBar";
import AdminProductList from "./ProductList";

export default function AdminPanel() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 transition-all">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <p className="text-gray-600">Manage products and users here.</p>
        <AdminProductList />
      </div>
    </div>
  );
}
