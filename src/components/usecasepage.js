import React, { Suspense, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import VideoOverlay from './videooverlay';
import ImageOverlay from './imageoverlay';
import fallbackData from '../fallbackdata/useCases.json';

function UseCasePage() {

    const { character } = useParams();

    console.log("Character : " + character);

    const filteredFallbackData = fallbackData.filter(useCase => useCase.character === character);

    //const [useCaseByCharacter, setuseCaseByCharacter] = useState([]);

    const useCaseByCharacter = filteredFallbackData[0];

    //useEffect(() => {
        /* async function fetchData() { 
            try {
                console.log("== BEFORE Call ==");
                const data = await fetch(`http://localhost:4000/useCases/${character}`);

                if (!data.ok) {
                    throw new Error('Fetch failed');
                }

                console.log("== AFTER Call ==");
                const items = await data.json();
                console.log('UseCaseByCharacter : ' + items[0].character);
                setuseCaseByCharacter(items[0]);
            } catch (error) {
                console.log('Fetch error : ', error);
                //const fallbackData = require('../fallbackdata/useCases.json'); */

                //console.log("Filtered Data Length : " + filteredFallbackData.length);
                //setuseCaseByCharacter(filteredFallbackData[0]);
            /* }
        }
        fetchData(); */
    //}, [filteredFallbackData]); 

    const [isImageOpen, setIsImageOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const openImageOverlay = () => {
        setIsImageOpen(true);
    };
    
    const openVideoOverlay = () => { 
        setIsVideoOpen(true);
    };

    const closeOverlay = () => {
        setIsImageOpen(false);
        setIsVideoOpen(false);
    };

    return ( 
        <div>
            <div>
                <h1>{character}</h1>
                <div className='navbar'>
                    <Link to={`/ecatalogue/characters/${useCaseByCharacter.processArea}`}>Back to the Use Cases Page</Link><br></br>
                    <Link to="/ecatalogue">HomePage</Link>
                </div>
                <div className="image-title-container">
                    <div className="image-container">
                        <Suspense fallback={<div>Loading...</div>}>
                            <img src={process.env.PUBLIC_URL + useCaseByCharacter.botImageSrc} alt={useCaseByCharacter.character} />
                        </Suspense>
                    </div>
                    <div className="title-info-container">
                        <div className="title-box">
                            <Suspense fallback={<div>Loading...</div>}>
                                <h2>{useCaseByCharacter.name}</h2>
                            </Suspense>
                        </div>
                        <div className="info-container">
                            <div className="info-box">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <h2>{useCaseByCharacter.processArea}</h2>
                                </Suspense>
                            </div>
                            <div className="info-box">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <h2>{useCaseByCharacter.rpaToolUsed}</h2>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="body-container">
                <div className="body-box">
                    <div className="body-item">
                        <Suspense fallback={<div>Loading...</div>}>
                            <p><b>Process Scenario : </b> {useCaseByCharacter.processScenario}</p>
                        </Suspense>
                    </div>
                    <div className="body-item">
                        <Suspense fallback={<div>Loading...</div>}>
                            <p><b>As-Is Process : </b> {useCaseByCharacter.summaryAsIsProcess}</p>
                        </Suspense>
                    </div>
                    <div className="body-item">
                        <Suspense fallback={<div>Loading...</div>}>
                            <p><b>Functionality : </b> {useCaseByCharacter.automationScope}</p>
                        </Suspense>
                    </div>
                    {(useCaseByCharacter.processFlowIcon) ? (
                        <div className="body-item">
                            <p><b>Process Map : </b> <img alt={character} className='icon' src={process.env.PUBLIC_URL + useCaseByCharacter.processFlowIcon} onClick={openImageOverlay} /></p>
                        </div>
                    ) : null}
                    {(useCaseByCharacter.processMapVideo) ? (
                        <div className="body-item">
                            <p><b>SAP Process Flow : </b> <img alt={character} className='icon' src={process.env.PUBLIC_URL + '/video.png'} onClick={openVideoOverlay} /> </p>
                        </div>
                    ) : null}
                </div>
                {isImageOpen && <ImageOverlay imageData={ useCaseByCharacter } closeOverlay={closeOverlay} />}
                {isVideoOpen && <VideoOverlay videoData={ useCaseByCharacter.processMapVideo } closeOverlay={closeOverlay} />}
            </div>
        </div>
        
    );
};
export default UseCasePage;