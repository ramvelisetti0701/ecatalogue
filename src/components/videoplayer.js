import React from 'react';

function VideoPlayer({videoData}) { 
    return (
        <div>
            <video controls>
                <source src={process.env.PUBLIC_URL + videoData} type='video/mp4'/>
            </video>
        </div>
    );
};

export default VideoPlayer;