function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }