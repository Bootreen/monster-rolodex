import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [monstersFiltered, setMonstersFiltered] = useState(monsters);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))},
    []
  );

  useEffect(() => {
    setMonstersFiltered(monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField)))},
      [monsters, searchField]
  );

  const onSearchChange = event =>
    setSearchField(event.target.value.toLowerCase());

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={monstersFiltered} />
    </div>
  )  
};

export default App;