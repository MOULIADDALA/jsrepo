function add() {
    let x = document.getElementById('t1').value;
    let y = document.getElementById('t2').value;
    let result = parseFloat(x) + parseFloat(y)
    document.getElementById('t3').value = result
    console.log(result);
}
function sub() {
    let x = document.getElementById('t1').value;
    let y = document.getElementById('t2').value;
    let result = parseFloat(x) - parseFloat(y)
    document.getElementById('t3').value = result
    console.log(result);
}
function mul() {
    let x = document.getElementById('t1').value;
    let y = document.getElementById('t2').value;
    let result = parseFloat(x) * parseFloat(y)
    document.getElementById('t3').value = result
    console.log(result);
}
function div() {
    let x = document.getElementById('t1').value;
    let y = document.getElementById('t2').value;
    let result = parseFloat(x) / parseFloat(y)
    document.getElementById('t3').value = result
    console.log(result);
}
function rem() {
    let x = document.getElementById('t1').value;
    let y = document.getElementById('t2').value;
    let result = parseFloat(x) % parseFloat(y)
    document.getElementById('t3').value = result
    console.log(result);
}
function eraseData() {
    document.getElementById('t1').value = ""
    document.getElementById('t2').value = ""
    document.getElementById('t3').value = ""
}