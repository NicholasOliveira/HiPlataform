import React, { memo, useCallback, useMemo } from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Container } from './styles'
import Checkbox from '../Checkbox'
import handleCheckbox from '../../Utils/handleCheckbox';
import handleOpen from '../../Utils/handleOpen';

function ListItem({ item, listEdit, setListedEdit }) {

  let child = null;
  if ([item.children] && [item.children.length]) {
    child = (
      <ul className={listEdit[item.id].close === true ? 'close' : ''}>
        {Object.values(item.children).map(i => (
          <ListItem listEdit={listEdit} setListedEdit={setListedEdit} item={i} key={i.id} />
        ))}
      </ul>
    );
  }
  child = useCallback(child);

  return (
    <Container>
      <li className={listEdit[item.id].close === true ? 'close' : ''}>
        <div>
          <Checkbox id={item.id} isChildrenFalse={listEdit[item.id].isChildrenFalse} checked={listEdit[item.id].checked} name={item.name} arrow={listEdit[item.id].child && <KeyboardArrowDownIcon onClick={() => handleOpen(listEdit, setListedEdit, { id: item.id })} />} checkbox={() => handleCheckbox(listEdit, setListedEdit, { id: item.id })}>
          </Checkbox>
        </div>
        {child}
      </li>
    </Container >
  );
}

export default memo(ListItem);