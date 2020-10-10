import produce from "immer";

export function handleOpen(listEdit, setListedEdit, { id }) {
  const nextState = produce(listEdit, draftState => {
    draftState[id].close = !draftState[id].close
  })
  setListedEdit(nextState);
}

export function isChildren(id, listEdit, setListedEdit) {
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

export function handleCheckbox(listEdit, setListedEdit, { id }) {

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