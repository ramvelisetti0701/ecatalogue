import React, { Suspense } from "react";

function ImageOverlay({ imageData, closeOverlay }) { 

    return (
        <div>
            <div className="overlay">
                <div className="img-container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <img alt={imageData.character} src={process.env.PUBLIC_URL + imageData.processFlowEnlarged} />
                    </Suspense>
                </div>
                <button onClick={closeOverlay}>Close</button>
            </div>
        </div>
    );

};

export default ImageOverlay;
