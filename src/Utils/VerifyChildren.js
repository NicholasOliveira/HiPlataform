function verifyChildren(item) {
  if (item.children !== {} && item.children !== undefined && Object.keys(item.children).length > 0) {
    return true
  }
  return false
}

export default verifyChildren;