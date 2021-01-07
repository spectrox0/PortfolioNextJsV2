import React from "react";

const Fog: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="image img1" style={{
                backgroundImage: `url(${require("images/cloud1.png?webp")})`
            }}/>
            <div className="image img2" style={{
                backgroundImage: `url(${require("images/cloud5.png?webp")})`
            }}/>
        </div>
    )
}

export default Fog;
