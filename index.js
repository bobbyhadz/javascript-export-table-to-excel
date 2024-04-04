console.log('bobbyhadz.com');

const exportButton = document.getElementById('btn-export');

const table = document.getElementById('my-table');

exportButton.addEventListener('click', () => {
  /* Create worksheet from HTML DOM TABLE */
  const wb = XLSX.utils.table_to_book(table, {sheet: 'sheet-1'});

  /* Export to file (start a download) */
  XLSX.writeFile(wb, 'MyTable.xlsx');
});
