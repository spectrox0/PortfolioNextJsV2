import React from "react";

const Fog: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="image" style={{
                backgroundImage: `url(${require("images/cloud1.png?webp")})`
            }}/>
            <div className="image" style={{
                backgroundImage: `url(${require("images/cloud2.png?webp")})`
            }}/>
            <div className="image" style={{
                backgroundImage: `url(${require("images/cloud3.png?webp")})`
            }}/>
            <div className="image" style={{
                backgroundImage: `url(${require("images/cloud4.png?webp")})`
            }}/>
            <div className="image" style={{
                backgroundImage: `url(${require("images/cloud5.png?webp")})`
            }}/>
        </div>
    )
}

export default Fog;
