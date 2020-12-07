
import React from 'react';
import './App.css';
import ToDoClass from './components/ToDoClass';


class App extends React.Component {

  render(){
    return (
      <div className="App"> 
        <ToDoClass />
      </div> 
    );
  }
 
}

export default App;
