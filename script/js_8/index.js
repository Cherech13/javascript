// //1.1
//Тільки замість  Ctrl +, у мене  Ctr Q,
let text = document.getElementById("text");
let area = document.getElementById("area");
document.body.onkeydown = keyHandler;
function keyHandler(e) {
    if (e.ctrlKey && (e.code === "KeyQ" || e.code === "KeyE")) {
        e.preventDefault();
        if (e.code === "KeyQ") {
            if (area.style.display) {
                area.style.display = "";
                text.style.display = "block";
                text.textContent = area.value;
            }
        }
        else {
            if (!area.style.display) {
                area.style.display = "block";
                text.style.display = "none";
                area.value = text.textContent;
            }
        }
    }
}

//1.2

grid.onclick = function(e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;
    sortGrid(th.cellIndex, th.dataset.type);
  };

  function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    let compare;

    switch (type) {
      case 'number':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
        break;
      case 'string':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        };
        break;
    }

    rowsArray.sort(compare);

    tbody.append(...rowsArray);
  }