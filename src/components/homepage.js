import React, { Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fallbackData from '../fallbackdata/processAreas.json';

function HomePage() {
    
    const [processAreas, setProcessAreas] = useState([]);

    useEffect(() => {
        /* const fetchItems = async () => {
            try {
                console.log("== BEFORE FETCH ==");
                const data = await fetch(`http://localhost:4000/processAreas`);

                if (!data.ok) {
                    throw new Error('Fetch failed');
                }

                console.log("== AFTER FETCH ==");
                const items = await data.json();
                console.log('ProcessArea' + items);
                setProcessAreas(items);
            } catch (error) {
                console.log('Fetch error : ', error);
                //const fallbackData = require('../fallbackdata/processAreas.json'); */
                setProcessAreas(fallbackData);
            /* }
        };

        fetchItems(); */
    }, []);
    
    return (
        <div>
            <h1>Autovention eCatalogue</h1>
            <br></br><br></br><br></br>
            <div className="image-grid">
                {processAreas.map((pArea) => (
                    <Link key={pArea.processArea} to={`/ecatalogue/characters/${pArea.processArea}`}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <img src={process.env.PUBLIC_URL + pArea.imageSrc} alt={pArea.processArea} /> {pArea.processArea}
                        </Suspense>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default HomePage;