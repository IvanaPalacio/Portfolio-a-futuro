import React from 'react'       //rafce
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";
const Cover = () => {
    return (
    <div className="cover-container">
        <video className="video" src={ coverVideo } autoPlay loop muted />
    </div>
    );
}

export default Cover;
