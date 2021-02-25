// import logo from './logo.svg';
import {useState, useEffect} from 'react';

import logo from './tek_logo.png';
import './App.css';
import Todo from './Components/Todo';

function App() {

    const [todos, setTodos] = useState([]);  //sample todo items.  these will need to be changed in your app.  Just filler todos, although they are quite important!
    const [entry, setEntry] = useState('');

    const HandleAdd = (event) => {
        event.preventDefault();
        setTodos([...todos, entry]);
        console.log(todos);
        //testing outputs
        //console.log(todos);
        //console.log(setTodos);

    };

    const handleInput = event => {
        event.preventDefault();
        setEntry(event.target.value);
    };

    const deleteSingle = (event, key) => {
        event.preventDefault();
        console.log(this);
 
    };

    const deleteAll = event => {
        event.preventDefault();
        setTodos([]);
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         <br/>
                  <p>Create a Todo List App</p>
                  {todos.map((t, i) => <> <input type="checkbox" id={i}></input><Todo key={i} item={t} /> <button id={i} onClick={deleteSingle}> Delete me</button> </>)}
              </div>
              <form>
                  <input id="input" type="text" onChange={handleInput} />
                  <button type="submit" className="button" onClick={HandleAdd}>
                      Add To List
                  </button>

                  <button id="delete" onClick={deleteAll}>
                      delete All
                  </button>
              </form>
      </header>
    </div>
  );
}

export default App;