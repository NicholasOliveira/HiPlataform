import React, { useState, useEffect, memo } from 'react';
import './App.css';
import api from './data/api'
import ListItem from './Components/TreeView'
import setListed from './Functions/setListed'

function App() {

  const [ListedEdit, setListedEdit] = useState([]);

  useEffect(() => {
    var data = localStorage.getItem("dados")
    if (data) {
      setListedEdit(JSON.parse(data))
    } else {
      setListedEdit(setListed)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("dados", JSON.stringify(ListedEdit))
  }, [ListedEdit])

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

export default memo(App);
