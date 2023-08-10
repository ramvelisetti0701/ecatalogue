import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import fallbackData from '../fallbackdata/processAreas.json';

function HomePage() {
    
    //const [processAreas, setProcessAreas] = useState([]);

    const processAreas = fallbackData;

    /* useEffect(() => {
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
                //setProcessAreas(fallbackData);
            /* }
        };

        fetchItems();
    }, []); */
    
    return (
        <div className='homepage-container'>
            <div className='navbar'>
                <Link to={`/ecatalogue/allCharacters`}>All Bots</Link><br></br>
                <Link to={`/ecatalogue/allBots`}>Bots at A Glance</Link>
            </div>
            <h1>Autovention eCatalogue</h1>
            <div className='content'>
                <div className="image-grid">
                    {processAreas.map((pArea) => (
                        <Link key={pArea.processArea} to={`/ecatalogue/characters/${pArea.processArea}`}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <img src={process.env.PUBLIC_URL + pArea.imageSrc} alt={pArea.processArea} />
                                <div className='image-title'>{pArea.processArea}</div>
                            </Suspense>
                        </Link>
                    ))}
                </div>
            </div>
            <article>
                <p>Imagine a world where mundane, repetitive tasks are handled swiftly and flawlessly by virtual assistants, allowing your talented employees to focus on high-value tasks and use their creativity, problem-solving skills, and expertise towards tasks that truly matter.</p>
                <p>TCS has come out with “AUTOVENTION e-CATALOG”. It is a ONE STOP SHOP which has industry proven BOTs in different process areas. These VIRTUAL EMPLOYEES (BOTs) are available off the shelf. It is PICK AND DROP in the customers landscape and can be integrated seamlessly with existing application. By embracing these BOTs, organisations will see significant boost in OPERATIONAL EFFICIENCY, IMPROVED RELIABILITY, and ACCELERATED TURNAROUND TIMES.</p>
                <p>It empowers the organization to adapt to evolving market demands with agility and flexibility. It will liberate your employees to unleash their true potential, driving innovation, and fostering a culture of excellence within your organization.</p>
            </article>
        </div>
    );
}
export default HomePage;