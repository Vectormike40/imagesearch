import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from '../components/SearchField/SearchField'

const apiKey = '581eb4a49e4ae7142198627eae4a64b445a6bd9af7bb96de5a3cf51e2b62d919';
function App() {

  const [searchField, setSearchField] = useState('');
  const [photos, setPhotos] = useState([]);

  // getPhotos = async (photo) => {
  //   let data;
  //   data = await fetch(`https://api.unsplash.com/search/photos?${apiKey}`, {
  //     query: photo,
  //     per_page: 30
  //   });
  //   const items = await data.json();
  //   setPhotos(items);
  // }

  useEffect(() => {
      let fetchData = async (query) => {
      try {
      let data = await fetch(`https://api.unsplash.com/search/photos?client_id=${apiKey}&per_page=2&query=${query}`);
      const items = await data.json();
      setPhotos(items.results);
      } catch (error) {
        console.log(`Error is ${error}`)
      }
    }
    fetchData();
    
    console.log(photos);
  }, [searchField]);
  
  function onSearchChange(e) {
    setSearchField(e.target.value)
    this.fetchData(searchField)
  }

  return (
    <div>
      <SearchBar onSearch={onSearchChange} search={searchField}/>
    </div>
  );
}

export default App;
