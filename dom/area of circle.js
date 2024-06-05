function area() {
    const pi = 3.14 ;
    let radius = document.getElementById('l').value
    let result = pi * (radius * radius)
    document.getElementById('s').value = result
    console.log(result)
}

function erase() {
    document.getElementById('p').value = ""
    document.getElementById('l').value = ""
    document.getElementById('s').value = ""
}