let count = 0;

document.getElementById('increase-btn').onclick = function () {
    count ++;
    document.getElementById('count').innerHTML = count;
}

document.getElementById('reset-btn').onclick = function () {
    count = 0;
    document.getElementById('count').innerHTML = count;
}

document.getElementById('decrease-btn').onclick = function () {
    count--;
    document.getElementById('count').innerHTML = count;
}