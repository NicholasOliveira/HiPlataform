import React, { useState, useEffect } from 'react';
import './App.css';
import api from './data/api'
import { ListItem } from './Components/TreeView'
import setListed from './Functions/setListed'

function App() {

  const [ListedEdit, setListedEdit] = useState([]);

  useEffect(() => {
    setListedEdit(setListed())
  }, [])


  const [Peoples, setPeoples] = useState([]);
  useEffect(() => {

    setPeoples(api);
  }, [])

  return (
    <>
      {Object.values(Peoples).map(i => {
        return <ListItem listEdit={ListedEdit} setListedEdit={setListedEdit} item={i} key={i.id} />
      })}
    </>
  );
}

export default App;
