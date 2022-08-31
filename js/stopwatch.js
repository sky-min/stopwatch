const min = document.getElementsByTagName('span')[0];
const sec = document.getElementsByTagName('span')[1];
const cs = document.getElementsByTagName('span')[2];
const btnBox = document.getElementById('btnBox');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let minVal = secVal = csVal = 0;

function minCount() {
    minVal++;
    if (minVal < 10) {
        minStr = '0'+String(minVal);
    } else if (minVal < 100) {
        minStr = String(minVal);
    } else { 
        minVal = 0;
        minStr = '00';
    }
    min.innerHTML = minStr;
}

function secCount() {
    secVal++;
    if (secVal < 10) {
        secStr = '0'+String(secVal);
    } else if (secVal < 60) {
        secStr = String(secVal);
    } else {
        secVal = 0;
        secStr = '00';
        minCount();
    }
    sec.innerHTML = secStr;
}

function csCount() {
    csVal++;
    if (csVal < 10) {
        csStr = '0'+String(csVal);
    } else if (csVal < 100) {
        csStr = String(csVal);
    } else {
        csVal = 0;
        csStr = '00';
        secCount();
    }
    cs.innerHTML = csStr;
}

function Start() {
    startBtn.style.display = 'none';
    btnBox.style.display = 'block';
    count = setInterval(csCount, 10);
}

function Stop() {
    if (stopBtn.value == '중지') {
        clearInterval(count);
        stopBtn.value = '계속';
    }
    else {
        count = setInterval(csCount, 10);
        stopBtn.value = '중지';
    }
}

function Reset() {
    stopBtn.value = '중지';
    btnBox.style.display = 'none';
    startBtn.style.display = 'block';
    clearInterval(count);
    minVal = 0; secVal = 0; csVal = 0;
    min.innerHTML = '00';
    sec.innerHTML = '00';
    cs.innerHTML = '00';
}

startBtn.addEventListener('click', function() {Start()});
stopBtn.addEventListener('click', function() {Stop()});
resetBtn.addEventListener('click', function() {Reset()});
