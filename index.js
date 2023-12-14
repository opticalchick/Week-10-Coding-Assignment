let id = 0;
//this takes in user input data and adds rows to the table with each cell containing
//different input
document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('last-name').value;
    row.insertCell(1).innerHTML = document.getElementById('first-name').value;
    row.insertCell(2).innerHTML = document.getElementById('phone-number').value;
    row.insertCell(3).innerHTML = document.getElementById('address').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    //this clears all fields after entry and sorts the data alphabetically in 
    //the table according the the last name. 
    document.getElementById('last-name').value = '';
    document.getElementById('first-name').value = '';
    document.getElementById('phone-number').value = '';
    document.getElementById('address').value = '';
    sortTable();
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-info';
    btn.id = id;
    btn.innerHTML = 'Delete Entry';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("list");
    switching = true;
    // Make a loop that will continue until no switching has been done: 
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        // Loop through all table rows (except the first, which contains table headers): 
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            //this pulls the data to compare.  It's pulling the current row and the next
            //row and comparing the table data in the first column, which is the last name
            //(index[0]) of table data.

            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            // Check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            // If a switch has been marked, make the switch
            //and mark that a switch has been done: 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}