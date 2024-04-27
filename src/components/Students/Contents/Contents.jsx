import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import UserList from "../../UserList/UserList";
import StudentDetail from "../StudentDetail/StudentDetail";

const Contents = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const addShowDetail = () => {
    setShowDetail((show) => true);
  };

  const removeShowDetail = () => {
    setShowDetail((show) => false);
  };

  const handleSelectedId = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="contents">
      <SearchBar page={"Students"} />
      <div className="admin-dashboard">
        <UserList
          showStatus={showDetail}
          addShow={addShowDetail}
          selectId={handleSelectedId}
          page={"Students"}
        />
        {showDetail && (
          <StudentDetail
            removeShow={removeShowDetail}
            page={"Student"}
            selectedId={selectedId}
          />
        )}
      </div>
    </div>
  );
};

export default Contents;
