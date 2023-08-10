import React, { Suspense, useState } from 'react';
import fallbackData from '../fallbackdata/useCases.json';
import { Link } from 'react-router-dom';

function AllBots() {
    
    //const allBots = fallbackData;
    
    const [data, setData] = useState(fallbackData);

    const [sortOrder, setSortOrder] = useState('asc');//or 'desc' for descdending
    const [sortedField, setSortedField] = useState(null);

    
    function sortData(field) {
        const sortedData = [...data].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a[field] > b[field] ? 1 : -1;
            } else {
                return a[field] < b[field] ? 1 : -1;
            }
        });
        
        setData(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        setSortedField(field);
    }

    return (
        <div>
            <div className='navbar'>
                <Link to={`/ecatalogue/allCharacters`}>All Bots</Link><br></br>
                <Link to="/ecatalogue">HomePage</Link>
            </div>
            <h1>Bots at A Glance</h1>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Bot</th>
                            <th onClick={() => sortData('botName')}>
                                Bot Name {sortedField === 'botName' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                            </th>
                            <th onClick={() => sortData('processArea')}>
                                Process Area {sortedField === 'processArea' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                            </th>
                            <th onClick={() => sortData('functionality')}>
                                Functionality {sortedField === 'functionality' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((bot) => (
                            <tr>
                                <td>
                                    <Link key={bot._id} to={`/ecatalogue/useCases/${bot.character}`}>
                                        <Suspense fallback={<div>Loading...</div>}>
                                            <img alt={bot.character} src={process.env.PUBLIC_URL + bot.botIconsSrc} />
                                        </Suspense>    
                                    </Link>
                                </td>
                                <td>
                                    <Link key={bot.character} to={`/ecatalogue/useCases/${bot.character}`}>
                                        {bot.character}
                                    </Link>
                                </td>
                                <td>
                                    <Link key={bot.processArea} to={`/ecatalogue/characters/${bot.processArea}`}>
                                        {bot.processArea}
                                    </Link>
                                </td>
                                <td>{bot.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllBots;