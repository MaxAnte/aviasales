import React from "react";

import "./filters.css";

function Filters() {
  return (
    <div className="filters">
      <div className="filter-group">
        <input type="checkbox" name="all" />
        <label htmlFor="all">All</label>
      </div>
      <div className="filter-group">
        <input type="checkbox" name="change_1" />
        <label htmlFor="change_1">1 change</label>
      </div>
      <div className="filter-group">
        <input type="checkbox" name="change_2" />
        <label htmlFor="change_2">2 change</label>
      </div>
      <div className="filter-group">
        <input type="checkbox" name="change_3" />
        <label htmlFor="change_3all">3 change</label>
      </div>
    </div>
  );
}

export default Filters;
