import React from 'react';
import './App.css';
import TaskManager from './Components/TaskManager.js';


let data = [ 'Do the Chores', 'Clean the House',  ]

function App() {
  return (
    <div className="App">
      <TaskManager task={data} />
    </div>
  );
}

export default App;
