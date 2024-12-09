import React from "react";
import { Link } from "react-router-dom";

const TreeAdoptionCard = () => {
  return (
    <div className="tree-adoption-card">
      <h4>Tree Species: Oak</h4>
      <p>Location: Mountain Range</p>
      <Link to="/adopt-tree" className="btn">
        Adopt this Tree
      </Link>
    </div>
  );
};

export default TreeAdoptionCard;
