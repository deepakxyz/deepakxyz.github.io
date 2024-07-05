import React from "react";
import ReactPlayer from "react-player/vimeo";

const ShowreelPage = () => {
    return (
        <>
        <div className="content">
            <div className="showreel-wrapper">
                <ShowreelVideo/>
            </div>
        </div>
        </>
    )
}

export default ShowreelPage;


const ShowreelVideo = () => {
    return (
        <div className = 'player-wrapper'>
            <ReactPlayer
            className='react-player'
            url="https://vimeo.com/557490775"
            width="100%"
            height="100%"
            controls={true}
            ></ReactPlayer>
        </div>
    )
}