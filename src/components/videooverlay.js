import React, { Suspense, lazy } from "react";

const VideoPlayer = lazy(() => import ('./videoplayer'));

function VideoOverlay({ videoData, closeOverlay }) {

    return (
        <div>
            <div id="videoOverlay" className="overlay">
                <div className="video-container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <VideoPlayer videoData={ videoData } />
                    </Suspense>
                </div>
                <button onClick={closeOverlay}>Close</button>
            </div>
        </div>
    );

};

export default VideoOverlay;
