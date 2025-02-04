let myTable = [];
let counter = 0;
let row = 3;
let column = 6;

for (let i = 0; i < row; i++) {
    let tempTable = [];

    for (let j = 0; j < column; j++) {
        tempTable.push(counter);
        counter++;
    }
    myTable.push(tempTable);
}

console.table(myTable);