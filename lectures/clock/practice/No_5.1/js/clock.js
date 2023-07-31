const clock = document.querySelector('#clock');

// clock.innerHTML = "laalalal";

// setInterval() 설명 후 끝
function getTime() {
    const nowDate = new Date();
    clock.innerText = `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`;
};

getTime(); // 먼저 보여주고 1초 지날 때마다 보이게
setInterval(getTime, 1000); // 얘만하면 시간을 1초 기다렸다가 보여줌

// setInterval()은 시간 마다 실행하고 setTimeout()은 시간 후에 실행
// setTimeout(sayHello, 5000);

