import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from "./containers/AddTodo"; 
import ListTodo from "./containers/ListTodo"; 
import FragmentDemo from './fragmentDemo';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" exact strict render={
        () => {
          return (<h1>Welcome home</h1>)
        }
      }></Route>
      <Route path="/addTodo" exact strict component={AddTodo}></Route>
      {/* <FragmentDemo />
      <AddTodo />
      <ListTodo /> */}
    </div>
    </Router>
  );
}

export default App;
