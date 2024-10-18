const grid = document.querySelector(".grid");

let totalSquares = 0;

/**
 * Dynamically sets dimensions depending on totalSquares.
 */
function setDimensions(newDimension) {
    let newTotalSquares = newDimension * newDimension;
    document.documentElement.style.setProperty("--grid-dimension", newDimension);

    if (newTotalSquares < totalSquares) {
        let totalSquaresRemoved = totalSquares - newTotalSquares;

        for (let i = 0; i < totalSquaresRemoved; i++) {
            grid.removeChild(grid.lastElementChild);
        } // for
    } // if

    for (let i = 0; i < newTotalSquares - totalSquares; i++) {
        const box = document.createElement("div");
        box.classList.add("box");

        // add event listener here (or use event delegation)

        grid.appendChild(box);
    } // for

    totalSquares = newTotalSquares;
} // setDimensions
