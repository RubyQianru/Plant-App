function getOffset(currentPage, listPerPage) {
  return (currentPage - 1) * listPerPage;
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

module.exports = {
  getOffset,
  emptyOrRows
};
