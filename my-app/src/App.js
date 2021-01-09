import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Hello from './Components/hello'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'
import Eventbind from './Components/Eventbind'
import ParentComponent from './Components/ParentComponent';
import Conditional from './Components/Conditional';
import CounterWithHooks from './Components/CounterWithHooks';
import Form from './Components/Form';
import ShareApi from './api/ShareApi';
import FormHooks from './Components/FormHooks';
import BoilingVerdict from './Components/BoilingVerdict';
import ReactDemo from './Components/ReactDemo';
import RegisterCat from './Components/RegisterCat';

function App() {

  const State = {
    Id: 0,
    name: '',
    color: '',
    age: '',
    habits: '',
  }

  const [listOfCat, setListOfCat] = useState({ list: [] });
  const [initialState, setInitialState] = useState(State);

  const setValueToList = (item) => {

    // setListOfCat([...listOfCat,item]);
    const isExistObj = listOfCat?.list.find((x) => { return x.Id === item.Id });

    if (isExistObj != null) {
      for (var i = 0; i < listOfCat?.list.length; i++) {
        if (listOfCat.list[i].Id == item.Id) {
          listOfCat.list[i] = item;
          setListOfCat(listOfCat);
          setInitialState(State);
          return;
        }
      }
      
    } else {
      item.Id = listOfCat.list.length + 1;
      listOfCat.list.push(item);
    }
    setInitialState(State);
    setListOfCat({ list: listOfCat.list });
  }

  const editList = (Id) => {
    
    const objOfCat = listOfCat?.list.find((item) => { return item.Id === Id })
    setInitialState(objOfCat);
  }

  return (
    <div className="App">
      <header className="App-header">
        <RegisterCat data={setValueToList} value={initialState} />
        <ReactDemo data={listOfCat.list} callBacks={editList} />
        {/* <BoilingVerdict/> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first React App.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        {/* <Greet/> */}
        {/* <Welcome/> */}
        {/* <Hello name='Mudit'>
            <p>Welcome to React Tuts</p>
          </Hello> */}
        {/* </a> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <Eventbind/> */}
        {/* <ParentComponent/> */}
        {/* <Conditional/> */}
        {/* <CounterWithHooks/> */}
        {/* <Form /> */}
        {/* <FormHooks /> */}
        {/* <ShareApi /> */}
      </header>
    </div>
  );
}

export default App;
