import React from "react";
import { Link } from "react-router-dom";
import TreeAdoptionCard from "./TreeAdoptionCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to the Dashboard</h2>
      <div className="dashboard-buttons">
        <Link to="/adopt-tree" className="btn">
          Adopt a Tree
        </Link>
        <Link to="/my-adopted-trees" className="btn">
          My Adopted Trees
        </Link>
        <Link to="/donate" className="btn">
          Donate for Plantation
        </Link>
      </div>
      <div className="tree-cards">
        <h3>Available Trees for Adoption</h3>
        <TreeAdoptionCard />
        <TreeAdoptionCard />
        <TreeAdoptionCard />
      </div>
    </div>
  );
};

export default Dashboard;
