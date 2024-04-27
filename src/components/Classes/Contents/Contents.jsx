import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import StudentDetail from "../../Students/StudentDetail/StudentDetail";
import ClassDetail from "../ClassDetail/ClassDetail";

const Contents = () => {
  return (
    <div className="contents">
      <SearchBar page={"Classes"} />
      <ClassDetail />
    </div>
  );
};

export default Contents;
