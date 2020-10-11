import { memo, useMemo } from "react";
import produce from "immer";

function handleOpen(listEdit, setListedEdit, { id }) {
  const nextState = produce(listEdit, draftState => {
    draftState[id].close = !draftState[id].close
  })
  setListedEdit(nextState);
}

export default handleOpen;