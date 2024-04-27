import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import UserList from "../../UserList/UserList";
import ParentDetail from "../ParentDetail/ParentDetail";

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
      <SearchBar page={"Parents"} />
      <div className="admin-dashboard">
        <UserList
          showStatus={showDetail}
          addShow={addShowDetail}
          selectId={handleSelectedId}
          page={"Parents"}
        />
        {showDetail && (
          <ParentDetail
            removeShow={removeShowDetail}
            page={"Parent"}
            selectedId={selectedId}
          />
        )}
      </div>
    </div>
  );
};

export default Contents;
