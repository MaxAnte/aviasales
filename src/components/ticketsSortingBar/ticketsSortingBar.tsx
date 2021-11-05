import React from "react";
import "./ticketsSortingBar.css";

function TicketsSortingBar() {
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

export default TicketsSortingBar;
