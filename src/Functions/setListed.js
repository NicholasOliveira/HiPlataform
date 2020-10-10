import api from '../data/api'

const neww = {};

export default function setListed() {

  Object.values(api).map(i => (
    ChangeList({ item: i, key: i.id, parent: null })
  ))

  function ChangeList({ item, parent }) {
    var child = false
    if (item.children[0] != undefined) {
      child = true
    }

    neww[item.id] = ({ id: item.id, checked: false, close: true, parent: parent, isChildrenFalse: 0, child: child });

    if ([item.children] && [item.children.length]) {
      Object.values(item.children).map(i => (
        ChangeList({ item: i, key: i.id, parent: item.id })
      ))
    }
  }
  return neww;
}
