import produce from "immer";

function isChildren(id, listEdit, setListedEdit) {
  const parent = listEdit[id].parent;
  if (parent !== null) {
    const nextState2 = produce(listEdit, draftState => {
      if (listEdit[id].checked === false && listEdit[parent].checked === true) {
        draftState[parent].isChildrenFalse = draftState[parent].isChildrenFalse - 1;
      } else {
        draftState[parent].isChildrenFalse = draftState[parent].isChildrenFalse + 1;
      }
    });
    setListedEdit(nextState2)
  }
}

export default isChildren;