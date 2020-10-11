import React, { memo, useCallback } from 'react';
import { Style } from './styles'
import handleCheckbox from '../../Utils/handleCheckbox';

//<input  type="checkbox"  />

function Checkbox({ id, name, arrow, checkbox, checked, isChildrenFalse }) {
  return (
    <Style>
      <label className="container">
        {name}
        <input className="checkbox" type="checkbox" checked={checked} onChange={checkbox} name={`checkbox-${id}`} id={id} />
        {isChildrenFalse < 0 ? <span className="checkmark2"></span> : <span className="checkmark"></span>}
      </label>
      {arrow}
    </Style>
  )
}
export default memo(Checkbox);
