import { Component } from 'react';

import CardList from './components/CardList/CardList';

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
        <input
          className='search-box'
          type='search'
          placeholder='Search Monsters'
          onChange={(e) => onSearchChange(e)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
