const SOLUTION = [
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0]
];

const ROW_HEADER = ["3", "3", "2 2 2", "1 1 3 3", "3 1 1 1 1 2",
                    "3 1 1 1 1 4", "3 2 2 3 1", "2 4 1 2", "2 9 5", "17",
                    "5 1 5", "5 5", "2 1 5 1 2", "1 4 4 1", "1 1 1 1 1 1"];

const COL_HEADER = ["<br><br><br>7", "<br>3<br>6<br>3", "2<br>4<br>3<br>1", "<br>1<br>3<br>2", "<br><br>3<br>6",
"2<br>1<br>4<br>2", "<br><br><br>12", "<br><br>3<br>2", "<br><br>4<br>1", "<br><br>3<br>2", 
"<br><br>3<br>6", "<br>2<br>6<br>2", "<br><br>5<br>6", "<br><br>3<br>2", "<br><br>3<br>1", 
"<br><br>4<br>3", "<br><br><br>5", "<br><br>3<br>2", "<br><br>2<br>1", "<br><br><br>2"];

var rows = 15;
var cols = 20;
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

makeGrid();

window.onload = function () {
    var hour = 0;
    var min = 0;
    var sec = 0;
    var clock = 0;

    function timer() {
        clearTimeout(clock);
        sec++;
        if (sec > 59) {
            sec = 0;    
            min++;
        } if (min > 59) {
            min = 0;
            hour++;
        }
        document.getElementsByTagName('h2')[0].textContent = (hour ? (hour > 9 ? hour : "0" + hour) : "00") + ":" + (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
        clock = setTimeout(timer, 1000);
    }

    timer();
}