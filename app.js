let screenValue = "";
let total = 0;
let oldNum = 0;
let newNum = 0;
let operation;
let arithPressed = false;

//Assigning click listeners to all number buttons
document.querySelector("#oneBtn").addEventListener("click", (e) => {
    //This control flow switches the CSS of the screen so there isnt a size change when numbers are on the screen versus an empty screen
    // if (screenValue === "") {
    //     document.getElementById("calculatorScreenBottomNoNumbers").id = "calculatorScreenBottomWithNumbers"
    // }
    
    if (arithPressed === false) {
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
    } else {
        document.getElementById("screenValue").innerHTML = "";
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
        arithPressed = false;
    }
})
document.querySelector("#twoBtn").addEventListener("click", (e) => {
    if (arithPressed === false) {
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
    } else {
        document.getElementById("screenValue").innerHTML = "";
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
        arithPressed = false;
    }
})
document.querySelector("#threeBtn").addEventListener("click", (e) => {
    if (arithPressed === false) {
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
    } else {
        document.getElementById("screenValue").innerHTML = "";
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
        arithPressed = false;
    }
})
document.querySelector("#fourBtn").addEventListener("click", (e) => {
    if (arithPressed === false) {
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
    } else {
        document.getElementById("screenValue").innerHTML = "";
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
        arithPressed = false;
    }
})
document.querySelector("#fiveBtn").addEventListener("click", (e) => {
    if (arithPressed === false) {
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
    } else {
        document.getElementById("screenValue").innerHTML = "";
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
        arithPressed = false;
    }
})
document.querySelector("#sixBtn").addEventListener("click", (e) => {
    if (arithPressed === false) {
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
    } else {
        document.getElementById("screenValue").innerHTML = "";
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
        arithPressed = false;
    }
})
document.querySelector("#sevenBtn").addEventListener("click", (e) => {
    if (arithPressed === false) {
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
    } else {
        document.getElementById("screenValue").innerHTML = "";
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
        arithPressed = false;
    }
})
document.querySelector("#eightBtn").addEventListener("click", (e) => {
    if (arithPressed === false) {
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
    } else {
        document.getElementById("screenValue").innerHTML = "";
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
        arithPressed = false;
    }
})
document.querySelector("#nineBtn").addEventListener("click", (e) => {
    if (arithPressed === false) {
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
    } else {
        document.getElementById("screenValue").innerHTML = "";
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
        arithPressed = false;
    }
})
document.querySelector("#zeroBtn").addEventListener("click", (e) => {
    if (arithPressed === false) {
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
    } else {
        document.getElementById("screenValue").innerHTML = "";
        document.getElementById("screenValue").innerHTML += e.target.value;
        screenValue += e.target.value;
        arithPressed = false;
    }
})

//Clear button removes screen value and resets it to 0
document.querySelector("#clearBtn").addEventListener("click", (e) => {
    document.getElementById("screenValue").innerHTML = "";
    screenValue = "";
    oldNum = 0;
    newNum = 0;
    total = 0;
    arithPressed = false;
})

//Assigning click listeners to arithmetic buttons
document.querySelector("#addBtn").addEventListener("click", (e) => {
    operation = e.target.value;
    oldNum = Number(screenValue);
    console.log("OLD", oldNum);
    screenValue = "";
    arithPressed = true;
})
document.querySelector("#subtractBtn").addEventListener("click", (e) => {
    operation = e.target.value;
    oldNum = Number(screenValue);
    console.log("OLD", oldNum);
    screenValue = "";
    arithPressed = true;
})
document.querySelector("#multiplyBtn").addEventListener("click", (e) => {
    operation = e.target.value;
    oldNum = Number(screenValue);
    console.log("OLD", oldNum);
    screenValue = "";
    arithPressed = true;
})
document.querySelector("#divideBtn").addEventListener("click", (e) => {
    operation = e.target.value;
    oldNum = Number(screenValue);
    console.log("OLD", oldNum);
    screenValue = "";
    arithPressed = true;
})

//Enter Button
// document.querySelector("#totalBtn").addEventListener("click", (e) => {
//     newNum = Number(screenValue);
//     console.log(`OLD ${oldNum}`, `NEW ${newNum}`);
//     if (operation === "add") {
//         total = oldNum + newNum;
//         console.log(`TOTAL ${total}`);
//         document.getElementById("screenValue").innerHTML = total;
//         screenValue = total;
//         oldNum = screenValue;
//         newNum = 0;
//     } else if (operation === "subtract") {
//         total = oldNum - newNum;
//         console.log(`TOTAL ${total}`);
//         document.getElementById("screenValue").innerHTML = total;
//         screenValue = total;
//         oldNum = screenValue;
//         newNum = 0;
//     } else if (operation === "multiply") {
//         total = oldNum * newNum;
//         console.log(`TOTAL ${total}`);
//         document.getElementById("screenValue").innerHTML = total;
//         screenValue = total;
//         oldNum = screenValue;
//         newNum = 0;
//     } else if (operation === "divide") {
//         total = oldNum / newNum;
//         console.log(`TOTAL ${total}`);
//         document.getElementById("screenValue").innerHTML = total;
//         screenValue = total;
//         oldNum = screenValue;
//         newNum = 0;
//     }
// })

document.querySelector("#totalBtn").addEventListener("click", (e) => {
    newNum = Number(screenValue);
    console.log(`OLD ${oldNum}`, `NEW ${newNum}`);
    if (operation === "add") {
        total = oldNum + newNum;
    } else if (operation === "subtract") {
        total = oldNum - newNum;
    } else if (operation === "multiply") {
        total = oldNum * newNum;
    } else {
        total = oldNum / newNum;
    }

    console.log(`TOTAL ${total}`);
    document.getElementById("screenValue").innerHTML = total;
    screenValue = total;
    oldNum = screenValue;
    newNum = 0;
})