function average() {
    let z = document.getElementById('d1').value
    let x = document.getElementById('d2').value
    let c = document.getElementById('d2').value
    let v = document.getElementById('d2').value
    let b = document.getElementById('d2').value
    let n = document.getElementById('d2').value
    let avg = (parseFloat(z) + parseFloat(x) + parseFloat(c) + parseFloat(v) + parseFloat(b) + parseFloat(n)) / 6
    let l = document.getElementById('d7').value = avg
    console.log(avg)
}