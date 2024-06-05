function result() {
    let a = document.getElementById('k1').value
    let b = document.getElementById('k2').value
    let res = (a * a * a) + 3 * (a * a) * b + 3 * (a) * (b * b) + (b * b * b)
    document.getElementById('k3').value = res
    console.log(res)

}
function erase(){
    document.getElementById('k1').value = ""
    document.getElementById('k2').value = ""
    document.getElementById('k3').value = ""

}