import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ displayItems }) => {
  return (
    <div>
      {displayItems.map((displayItem) => {
        return (
          <Tile key={Object.values(displayItem)} displayItem={ displayItem }/>
        )})}      
    </div>
  );
};
