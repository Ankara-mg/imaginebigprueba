import './App.css';
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';
import { productos } from './data';

function App() {

  const [showProducts, setShowProducts] = useState([productos]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app-container">
      <SearchBar 
        productos={productos} 
        setShowProducts={setShowProducts}
        setLoading={setLoading} />
      <Cards 
        productos={showProducts}
        loading={loading} />
    </div>
  );
}

export default App;
