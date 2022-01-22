import React, { useState } from 'react';
import './App.css';
import PetList from './Components/PetList';
import RegisterForm from './Components/RegisterForm';

function App() {

  const State = {
    Id: 0,
    name: '',
    color: '',
    age: '',
    habits: '',
    buttonText: 'Submit'
  }

  const [listOfCat, setListOfCat] = useState({ list: [] });
  const [initialState, setInitialState] = useState(State);

  const setValueToList = (item) => {

    //setListOfCat([...listOfCat, item]);
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

  const editList = (Id, type) => {
    if (type == 'edit') {
      const objOfCat = listOfCat?.list.find((item) => { return item.Id === Id })
      objOfCat.buttonText = 'Update';
      setInitialState(objOfCat);
    } else {
      const listOfPetAfterDelete = listOfCat?.list.filter((item) => { return item.Id !== Id });
      setListOfCat({ list: listOfPetAfterDelete });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <RegisterForm data={setValueToList} value={initialState} />
        <PetList data={listOfCat.list} callBacks={editList} />
      </header>
    </div>
  );
}

export default App;
