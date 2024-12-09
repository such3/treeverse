import React, { useState } from "react";
import axios from "axios";

const AdoptTreeForm = () => {
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const handleAdopt = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/trees/adopt", { species, location });
      setConfirmation(true);
    } catch (err) {
      setConfirmation(false);
    }
  };

  return (
    <div className="adopt-tree-form">
      <h2>Adopt a Tree</h2>
      {confirmation && (
        <div className="confirmation">Tree Adopted Successfully!</div>
      )}
      <form onSubmit={handleAdopt}>
        <input
          type="text"
          placeholder="Species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Confirm Adoption</button>
      </form>
    </div>
  );
};

export default AdoptTreeForm;
