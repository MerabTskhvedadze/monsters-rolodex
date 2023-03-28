import { Component } from 'react';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState({ searchField });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div>
        <SearchBox
          className='search-box'
          type='search'
          placeholder='Search Monster'
          changeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
