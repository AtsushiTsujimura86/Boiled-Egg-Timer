import React from "react";
import './egg_style.css';

function Egg({ mode }){
    //選ばれたモードによって卵の黄身の色を変えるcss
    const yolkColors = {
        soft: "#FF8C00",     // 半生：濃いオレンジ
        medium: "#FFC107",   // 半熟：明るいオレンジ
        hard: "#FAF884"      // 完熟：淡い黄色
    };
    const yolkStyle={
        backgroundColor:yolkColors[mode] || "#FFD966"
    }

    return(
        <div>
            <div className="egg">
                <div className="yolk" style={yolkStyle}></div>
            </div>
        </div>
    )    
}


export default Egg;