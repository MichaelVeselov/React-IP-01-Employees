import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John Smith', salary: 1500, increase: false, id: 1 },
        { name: 'Alex Brown', salary: 1600, increase: false, id: 2 },
        { name: 'Emil Svendsen', salary: 1700, increase: false, id: 3 },
      ],
    };
    this.maxID = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((elem) => elem.id !== id) };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxID++,
    };

    this.setState(({ data }) => {
      const newData = [...data, newItem];
      return { data: newData };
    });
  };

  render() {
    return (
      <div className='app'>
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
