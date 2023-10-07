import React from 'react'
import NavBar from '../src/components/NavBar/NavBar'; 
import "./App.css"
import { originals, action, romancemovies, horrormovies, comedymovies } from './urls'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={romancemovies} title='Romance' isSmall />
      <RowPost url={horrormovies} title='Horror' isSmall />
      <RowPost url={comedymovies} title='Comedy' isSmall />
    </div>
  );
}

export default App;
