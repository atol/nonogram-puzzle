const SOLUTION = [
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1],
    [0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
];

const ROW_HEADER = [
    "4 4 2", "2 11 2 2", "1 1 1 1 2", "1 1 2", "1 2 2",
    "2 1 1 2", "4 2 2", "1 1 1 2 6", "1 2 1 2 1 1", "2 2 5 2 1",
    "2 1 2 2 3", "2 2 2 4", "1 7 2 2", "2 1 2 2", "1 2 1 2 3",
    "1 2 3 3", "1 2 2 4", "1 2 1 5", "1 3 7 3 1", "1 1 2 3 2",
    "1 2 1 2", "1 8 5", "2 8", "3 6", "17"
];

const COL_HEADER = [
    "5 10", "2 2 3 2", "1 1 2 1", "1 1 2 1 2", "3 5 1 1",
    "1 2 1 1", "1 1 2 1 2 1", "1 1 2 2 1", " 1 3 1 2 2 1", "1 3 1 2 1 1",
    "1 1 2 1 1", "1 1 1 1 1 1", "1 2 1 1 1", "2 2 3 1 1", "2 2 4 1 1 1",
    "1 3 1 1 2 1", "1 2 1 2 2 3", "2 3 1 2 1 3", "4 2 2 4 3", "2 2 5 4",
    "1 1 10", "8 8 3", "15 3", "1 1 3", "3 2"
];

var rows = 25;
var cols = 25;
var board = Array(rows).fill().map(() => Array(cols).fill(0));

function makeGrid() {
    var grid = document.getElementById("grid");

    // clear grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    var cells = [];
    var row_header = []
    var col_header = []

    for (let c = 0; c < cols; c++) {
        let el = document.createElement("th");
        el.innerHTML = COL_HEADER[c];
        el.className = "col";
        col_header.push(el);
    }

    for (let r = 0; r < rows; r++) {
        let el = document.createElement("th");
        el.innerHTML = ROW_HEADER[r];
        el.className = "row";
        row_header.push(el);
    }
    
    for (let r = 0; r < rows; r++) {
        let cell = [];
        for (let c = 0; c < cols; c++) {
            let el = document.createElement("td")
            cell.push(el);
        }
        cells.push(cell)
    }

    var header = document.createElement("tr");
    header.appendChild(document.createElement("th")); // empty square

    for (let c = 0; c < cols; c++) {
        header.appendChild(col_header[c]);
    }

    grid.appendChild(header);
    
    var isMouseDown = false;

    for (let r = 0; r < rows; r++) {
        let tr = document.createElement("tr");
        tr.appendChild(row_header[r]);
        for (let c = 0; c < cols; c++) {
            let cell = tr.appendChild(cells[r][c]);
            cell.addEventListener("mousedown", function(){
                isMouseDown = true;
                if (cell.className == "clicked") {
                    cell.className = "crossed";
                    board[r][c] = 0;
                } else if (cell.className == "crossed") {
                    cell.className = "";
                } else {
                    cell.className = "clicked";
                    board[r][c] = 1;
                }
            });
            cell.addEventListener("mouseover", function () {
                if (isMouseDown) {
                    if (cell.className == "clicked") {
                        cell.className = "crossed";
                        board[r][c] = 0;
                    } else if (cell.className == "crossed") {
                        cell.className = "";
                    } else {
                        cell.className = "clicked";
                        board[r][c] = 1;
                    }
                }
            });
            cell.addEventListener("mouseup", function () {
                isMouseDown = false;
                checkWin();
            });
        }
        grid.appendChild(tr);
    }
}

function showSolution() {
    var grid = document.getElementById("grid");

    // clear grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    var cells = [];
    var row_header = []
    var col_header = []

    for (let c = 0; c < cols; c++) {
        let el = document.createElement("th");
        el.innerHTML = COL_HEADER[c];
        el.className = "col";
        col_header.push(el);
    }

    for (let r = 0; r < rows; r++) {
        let el = document.createElement("th");
        el.innerHTML = ROW_HEADER[r];
        el.className = "row";
        row_header.push(el);
    }
    
    for (let r = 0; r < rows; r++) {
        let cell = [];
        for (let c = 0; c < cols; c++) {
            let el = document.createElement("td")
            cell.push(el);
        }
        cells.push(cell)
    }

    var header = document.createElement("tr");
    header.appendChild(document.createElement("th")); // empty square

    for (let c = 0; c < cols; c++) {
        header.appendChild(col_header[c]);
    }

    grid.appendChild(header);
    
    for (let r = 0; r < rows; r++) {
        let tr = document.createElement("tr");
        tr.appendChild(row_header[r]);
        for (let c = 0; c < cols; c++) {
            let cell = tr.appendChild(cells[r][c]);
            if (SOLUTION[r][c] == 1) {
                cell.className = "marked";
            } else {
                cell.className = "unmarked";
            }
        }
        grid.appendChild(tr);
    }
}

function checkWin() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] != SOLUTION[r][c]) {
                return false;
            }
        }
    }

    alert("CONGRATULATIONS!")
}

function reset() {
    board = Array(rows).fill().map(() => Array(cols).fill(0));
    makeGrid();
}

window.onload = function () {
    var hour = 0;
    var min = 0;
    var sec = 0;

    function timer() {
        sec++;
        if (sec > 59) {
            sec = 0;    
            min++;
        } if (min > 59) {
            min = 0;
            hour++;
        }
        document.getElementsByTagName('h2')[0].textContent = (hour ? (hour > 9 ? hour : "0" + hour) : "00") + ":" + (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
        window.setTimeout(timer, 1000);
    }

    timer();
    makeGrid();
}