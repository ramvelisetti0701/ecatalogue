import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import CharacterPage from './components/characterpage';
import UseCasePage from './components/usecasepage';
import AllCharacters from './components/allcharacters';

import './App.css'; // Import the CSS file

function App() {
    /*
    window.chars = [];
    window.charName = [];
    window.procAreas = [];
  
    const [processAreas, setProcessAreas] = useState([]);
  
    useEffect(() => {
  
      const fetchItems = async () => {
        const data = await fetch(`http://localhost:4000/processAreas`);
        const items = await data.json();
        console.log('ProcessArea' + items);
        setProcessAreas(items);
      };
  
      fetchItems();
    }, []);
    
    if (window.procAreas === []) {
      window.procAreas = processAreas;
    }
    
    const [characters, setCharacters] = useState([]);
    //const [processAreas, setProcessAreas] = useState([]);
    const [useCases, setUseCases] = useState([]);
    const [useCaseByCharacter, setUseCaseByCharacter] = useState([]);
    const [charactersByProcessArea, setCharactersByProcessArea] = useState([]);
  
    const [character, setCharacter] = useState('');
    const [processArea, setProcessArea] = useState('');
  
    useEffect(() => {
      const fetchData = async () => { 
        try {
          const charactersData = await fetch('/characters');
          const useCasesData = await fetch('/useCases');
          const useCaseByCharacterData = await fetch('/useCases/${character}');
          const charactersByProcessAreaData = await fetch('/useCases/${processArea}');
          
          setCharacters(charactersData.json());
          setUseCases(useCasesData.json());
          setUseCaseByCharacter(useCaseByCharacterData.json());
          setCharactersByProcessArea(charactersByProcessAreaData.json());
  
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
  
      const handleCharacter = (e) => {
        setCharacter(e.target.value);
      };
  
    }, []); */

    return (
      <Router>
        <Routes>
          <Route exact path="/ecatalogue" element={<HomePage />} />
          <Route path="/ecatalogue/allCharacters" element={<AllCharacters />} />
          <Route path="/ecatalogue/characters/:processArea" element={<CharacterPage />} />
          <Route path="/ecatalogue/useCases/:character" element={<UseCasePage />} />
        </Routes>
      </Router>
    );
}

export default App;