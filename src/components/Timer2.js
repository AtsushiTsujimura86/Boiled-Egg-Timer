import React from "react";
import './layout.css';
import './timer.css';

function Timer2({ progressPercent=100}){
    return(
        <section className="timer">
            <h2 className="timer__title">Timer</h2>

            <div className="progress-area">
                <div className="progress-indicator" style={{left:`${progressPercent}%`}}>
                    <div className="progress-indicator__label">now</div>
                    <div className="progress-indicator__arrow">↓</div>
                </div>
                <div className="progress-bar">
                    <div 
                        className="progress-bar__fill"
                        style={{width:`${progressPercent}%`}}>
                    </div>
                </div>
                <div className="progress-labels">
                    <span className="progres-label__start">start</span>
                    <span className="progres-label__finish">finish</span>
                </div>
            </div>
        </section>
    )
}

export default Timer2;