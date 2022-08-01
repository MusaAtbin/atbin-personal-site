
let num1 = 12
let num2 = 8
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("num1-el")
let sumEl2 = document.getElementById("num2-el")

function count2() {
    let result = num1 + 2
    sumEl.textContent = result
}

function count3() {
    let result = num1 + 3
    sumEl.textContent = result
}

function count5() {
    let result = num1 + 5
    sumEl.textContent = result
}

function count7() {
    let result = num1 + 7
    sumEl.textContent = result
}

function count1() {
    let result = num2 + 1
    sumEl2.textContent = result
}

function count4() {
    let result = num2 + 4
    sumEl2.textContent = result
}

function count6() {
    let result = num2 + 6
    sumEl2.textContent = result
}

function count8() {
    let result = num2 + 8
    sumEl2.textContent = result
}