import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import UserList from "../../UserList/UserList";
import TeacherDetail from "../TeacherDetail/TeacherDetail";

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
      <SearchBar page={"Teachers"} />
      <div className="admin-dashboard">
        <UserList
          page={"Teacher"}
          showStatus={showDetail}
          addShow={addShowDetail}
          selectId={handleSelectedId}
        />
        {showDetail && (
          <TeacherDetail
            removeShow={removeShowDetail}
            page={"Teacher"}
            selectedId={selectedId}
          />
        )}
      </div>
    </div>
  );
};

export default Contents;
