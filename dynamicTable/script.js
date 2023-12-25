let rows = parseInt(prompt('How many rows do you want the table to have?'));
let columns = parseInt(prompt('How many columns do you want the table to have?'));

function createTable(rows, columns) {
    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow(-1);

        for (let j = 0; j < columns; j++) {
            let cell = row.insertCell(-1);
            cell.textContent = 'Row-' + (i + 1) + ' Column-' + (j + 1);
            cell.style.border = '1px solid black'; 
        }
    }

    document.body.appendChild(table);
}

createTable(rows, columns);
