import React from "react";

import "./sortingBar.css";

function SortingBar() {
  return (
    <div className="sorting-bar">
      <button type="button" className="btn-sort">
        Less
      </button>
      <button type="button" className="btn-sort">
        More
      </button>
    </div>
  );
}

export default SortingBar;
