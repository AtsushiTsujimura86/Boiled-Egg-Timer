import React, { useState, useEffect } from "react";
import './timer.css';

function Timer({ progressPercent = 50}) {
  return (
    <div className="timer-section">
        <h2>Timer</h2>
        <div className="timer-group">
            <div className="timer"></div>            
        </div>
    </div>
  );
}

export default Timer;