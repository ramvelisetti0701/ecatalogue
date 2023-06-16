import React, { Suspense, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fallbackData from '../fallbackdata/characters.json';


function CharacterPage() {
    const { processArea } = useParams();

    console.log("Process Area : " + processArea);

    const filteredFallbackData = fallbackData.filter(character => character.processArea === processArea);
    
    const [charsByProcessArea, setCharsByProcessArea] = useState([]);

    useEffect(() => {
        /* async function fetchData() { 
            try {
                console.log("== BEFORE Call ==");
                const data = await fetch(`http://localhost:4000/characters/${processArea}`);

                if (!data.ok) {
                    throw new Error('Fetch failed');
                }

                console.log("== AFTER Call ==");
                const items = await data.json();
                console.log('CharactersByProcessArea : ' + items);
                setCharsByProcessArea(items);
            } catch (error) {
                console.log('Fetch error : ', error);
                //const fallbackData = require('../fallbackdata/characters.json'); */

                console.log("Filtered Data Length : " + filteredFallbackData.length);
                setCharsByProcessArea(filteredFallbackData);
           /*  }
        }
        fetchData(); */
    }, [processArea, filteredFallbackData]);

    return (
        <div>
            <h1>{ processArea } Characters/Use Cases</h1>
            {/* <p>Character content for image {id}</p> */}
            <div className="char-image-grid">
                {charsByProcessArea.map((character) => (
                    <Link key={character.characterID} to={`/ecatalogue/useCases/${character.character}`}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <img src={process.env.PUBLIC_URL + character.botImageSrc} alt={character.character} /> {character.character}
                        </Suspense>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CharacterPage;