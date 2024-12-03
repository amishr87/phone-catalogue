import React, { useState } from "react";
import "./SearchPage.css";
import Search from "./Search";

const SearchPage = () => {
  const [phoneName, setPhoneName] = useState("");
  const [submittedPhone, setSubmittedPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneName.trim() === "") {
      alert("Please enter a valid phone name.");
      return;
    }
    setSubmittedPhone(phoneName.trim());
  };

  return (
    <>
      <div className="parent">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter Phone Name"
            className="phone-input"
            value={phoneName}
            onChange={(e) => setPhoneName(e.target.value)}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      {submittedPhone && <Search modelName={submittedPhone} />}
    </>
  );
};

export default SearchPage;
