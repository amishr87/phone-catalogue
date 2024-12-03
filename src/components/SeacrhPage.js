import React, { useState } from "react";
import "./SearchPage.css";
import Search from "./Search";

const SearchPage = () => {
  const [phoneName, setPhoneName] = useState("");
  const [submittedPhone, setSubmittedPhone] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedPhone(phoneName);
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
      {submittedPhone && <Search id={submittedPhone} />}{" "}
    </>
  );
};

export default SearchPage;
