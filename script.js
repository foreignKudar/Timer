let zeroTime = new Date();

zeroTime.setHours(0, 0, 0);

let zeroHour = zeroTime.getHours();
let zeroMin = zeroTime.getMinutes();
let zeroSec = zeroTime.getSeconds();

const hourEl = document.getElementById('hour');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec'); 

const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset')
const stopBtn = document.getElementById('stop');

/*function timeOn() {
    let init = setInterval(() => {
        zeroSec++
        if(zeroSec >= 60) {
            zeroMin++;
            zeroSec = zeroSec - 60;
        };
        if(zeroMin >= 60) {
            zeroHour++;
            zeroMin = zeroMin - 60;
        };

        if(zeroSec < 10) {
            zeroSec = '0' + zeroSec;
        }

        

        secEl.innerHTML = `<div class="clock seconds" id="sec">${zeroSec}</div>`;
        minEl.innerHTML = `<div class="clock mins" id="min">${zeroMin}</div>`;
    },1000)

    
}*/

startBtn.addEventListener('click', () => {

    /*startBtn.disabled = true;
    
    if(stopBtn.click) {
        startBtn.disabled = false;
    }*/

    let init = setInterval(() => {
        zeroSec++
        if(zeroSec >= 60) {
            zeroMin++;
            zeroSec = zeroSec - 60;
            if (zeroMin < 10) {
                zeroMin = '0' + zeroMin;
            };
        };
        if(zeroMin >= 60) {
            zeroHour++;
            zeroMin = zeroMin - 60;
        };

        if(zeroSec < 10) {
            zeroSec = '0' + zeroSec;
        }

        secEl.innerHTML = `<div class="clock seconds" id="sec">${zeroSec}</div>`;
        minEl.innerHTML = `<div class="clock mins" id="min">${zeroMin}</div>`;
        hourEl.innerHTML = `<div class="clock hours" id="hour">${zeroHour}</div>`;
    },1000)


    stopBtn.addEventListener('click', () => {
        clearInterval(init);
        secEl.innerHTML = `<div class="clock seconds" id="sec">${zeroSec}</div>`;
        minEl.innerHTML = `<div class="clock mins" id="min">${zeroMin}</div>`;
        hourEl.innerHTML = `<div class="clock hours" id="hour">${zeroHour}</div>`;
    });

    resetBtn.addEventListener('click', () => {
        secEl.innerHTML = `<div class="clock seconds" id="sec">${zeroSec = '00'}</div>`;
        minEl.innerHTML = `<div class="clock mins" id="min">${zeroMin = '00'}</div>`;
        hourEl.innerHTML = `<div class="clock hours" id="hour">${zeroHour = '00'}</div>`;
        clearInterval(init);
    })
});

if (zeroMin < 10) {
    zeroMin = '0' + zeroMin;
};

if(zeroHour < 10) {
    zeroHour = '0' + zeroHour;
}



/*----------------------------------------------------------*/

/*const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1
}

let fetchReq = fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    }
})
.then((res) => res.json())
.then((data) => {
    console.log(data)
})*/

