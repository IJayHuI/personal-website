const text = document.querySelector('.text');
const txt = ["Hello", "你好", "I'm JayHu", "我是胡杰", "这是我的个人网站"];

let index = 0;
let xiaBiao = 0;
let huan = true;

setInterval(function () {

    if (huan) {
        text.innerHTML = txt[xiaBiao].slice(0, ++index);
        console.log(index);
    }
    else {
        text.innerHTML = txt[xiaBiao].slice(0, index--);
        console.log(index);
    }

    if (index == txt[xiaBiao].length + 3) {
        huan = false;
    }
    else if (index < 0) {
        index = 0;
        huan = true;
        xiaBiao++;
        if (xiaBiao >= txt.length) {
            xiaBiao = 0;
        }
    }

}, 200)