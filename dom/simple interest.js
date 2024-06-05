function interest() {
    let Price = document.getElementById('f1').value
    let time = document.getElementById('f2').value
    let rate = document.getElementById('f3').value
    let PTR = eval(Price) * eval(time) * eval(rate) / 100
    document.getElementById('f4').value = PTR
    console.log(PTR)
    document.getElementById('f1').value = "";
    document.getElementById('f2').value = "";
    document.getElementById('f3').value = "";
}