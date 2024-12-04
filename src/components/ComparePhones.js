import React from "react";
import "./ComparePhones.css";
import SearchPage from "./SearchPage";

const Compare = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-1">
          <SearchPage />
        </div>
        <div className="child-2">
          <SearchPage />
        </div>
      </div>
    </>
  );
};

export default Compare;
