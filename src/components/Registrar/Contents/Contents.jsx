import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import AdminSidebar from "../../Admin/AdminSidebar/AdminSidebar";
import UserList from "../../UserList/UserList";
import RegistrarDetail from "../RegistrarDetail/RegistrarDetail";

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
      <SearchBar page={"Registrars"} />
      <div className="admin-dashboard">
        <UserList
          page={"Registrar"}
          showStatus={showDetail}
          selectId={handleSelectedId}
          addShow={addShowDetail}
        />
        {showDetail && (
          <RegistrarDetail
            removeShow={removeShowDetail}
            page={"Registrar"}
            selectedId={selectedId}
          />
        )}
      </div>
    </div>
  );
};

export default Contents;
