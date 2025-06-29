import React, { useState, useEffect } from "react";

function EggSelector({onSelect}) {
  return (
    <div>
        <button className="btn btn-warning">温泉卵</button>
        <button onClick={() => onSelect("slof")}>半生</button>
        <button onClick={() => onSelect("medium")}>半熟</button>
        <button onClick={() => onSelect("hard")}>完熟</button>
    </div>
  );
}

export default EggSelector;