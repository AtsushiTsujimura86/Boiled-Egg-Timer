import React, { useState, useEffect } from "react";

function EggSelector({onSelect} ) {
  return (
    <div className="eggSelector" >
        <h1>Select Mode</h1>
        <div className="row">
          <button className="btn btn-warning col-6">温泉卵</button>
          <button className="btn btn-warning col-6" onClick={() => onSelect("soft")}>半生</button>
        </div>
        <div className="row">
          <button className="btn btn-warning col-6" onClick={() => onSelect("medium")}>半熟</button>
          <button className="btn btn-warning col-6" onClick={() => onSelect("hard")}>完熟</button>
        </div>
    </div>
  );
}

export default EggSelector;