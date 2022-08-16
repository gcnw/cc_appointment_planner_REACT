import React from "react";

export const Tile = ( { displayItem } ) => {
  return (
    <div className="tile-container">
      <p>{Object.entries(displayItem)}</p>
    </div>
  );
};
