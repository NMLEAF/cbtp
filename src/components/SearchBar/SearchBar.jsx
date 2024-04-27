import React from "react";
import "./SearchBar.css";

const SearchBar = ({ page }) => {
  return (
    <div className="container disp-fl">
      <h2 className="title">{page}</h2>
      <form action="">
        <input type="text" placeholder="Search here" />
      </form>
      <div className="notifi-userpro">
        <span>notif</span>
        <span>userPro</span>
      </div>
    </div>
  );
};

export default SearchBar;
