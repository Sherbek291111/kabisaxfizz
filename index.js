function kabisa(){
    document.getElementById('b1').addEventListener('click', function() {
    let son = document.getElementById('kabisa').value
    let sson = son%4
    if (sson === 0) {
        document.getElementById('h3').innerText = son +' kabisa'
    } else {
        document.getElementById('h3').innerText = son +' kabisa emas'
    }

})
}
kabisa()

function hizzbuzz(){
    document.getElementById('b2').addEventListener('click', function() {
    let sonhiz = document.getElementById('hizbuz').value
    if (sonhiz % 3 === 0 && sonhiz % 5 ===0){
     document.getElementById('h4').innerText =  sonhiz +' fizzbuzz'
    } else if (sonhiz % 3 ===0) {
        document.getElementById('h4').innerText = sonhiz +' fizz'
    } else if (sonhiz % 5 ===0) {
        document.getElementById('h4').innerText = sonhiz +' buzz'
    } else {
        document.getElementById('h4').innerText = sonhiz
    }

})
}
hizzbuzz()