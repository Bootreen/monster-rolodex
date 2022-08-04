import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [monstersFiltered, setMonstersFiltered] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setMonstersFiltered(monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)))},
      [monsters, searchField]
  );

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void =>
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