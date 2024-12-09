import React, { useState } from "react";
import axios from "axios";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleDonation = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/donations", { amount });
      setMessage("Thank you for your donation!");
    } catch (err) {
      setMessage("Something went wrong, please try again.");
    }
  };

  return (
    <div className="donation-form">
      <h2>Donate for Tree Plantation</h2>
      <form onSubmit={handleDonation}>
        <input
          type="number"
          placeholder="Amount to Donate"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Donate Now</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default DonationForm;
