import React from "react";
import AdminReport from "./AdminReport";
import AdminTreeHealthManagement from "./AdminTreeHealthManagement";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="admin-actions">
        <AdminReport />
        <AdminTreeHealthManagement />
      </div>
    </div>
  );
};

export default AdminDashboard;
