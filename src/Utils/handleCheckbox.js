import React, { useCallback } from "react";
import produce from "immer";
import isChildren from './isChildren';

const handleCheckbox = (listEdit, setListedEdit, { id }) => {

  const nextState = produce(listEdit, draftState => {
    const checkedItem = draftState[id].checked;
    draftState[id].isChildrenFalse = 0;
    draftState[id].checked = !checkedItem;
    Object.values(listEdit).map((item) => {
      return item.parent === id && editCheckbox(item.id);
    })

    function editCheckbox(id) {
      draftState[id].checked = !checkedItem;
      Object.values(listEdit).map((item) => {
        return item.parent === id && editCheckbox(item.id);
      })
    }

  })
  setListedEdit(nextState);
  isChildren(id, nextState, setListedEdit);
}

export default handleCheckbox