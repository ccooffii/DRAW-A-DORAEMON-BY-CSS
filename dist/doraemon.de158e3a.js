let text = document.querySelector("#demo");
let cssStyle = document.querySelector("#style");
let tempString = "";
let n = 0;
let speed = 80;
let string = `
  .head {
    border: 1px solid black;
    background-color: rgb(2, 159, 227);
    height: 300px;
    margin: 0px auto;
    overflow: hidden;
    width: 310px;
  }
  .eyes {
    height: 80px;
    margin: -5px auto 0;
    padding-top: 10px;
    width: 120px;
  }
  .eye {
    border: 2px solid #000;
    box-sizing: border-box;
    height: 80px;
    width: 60px;
  }
  .eye-left {
    float: left;
    margin-left: 2px;
    background-color: white;
  }
  .eye-right {
    float: right;
    margin-left: 58px;
    background-color: white;
  }
  .eye-pupil {
    background-color: black;
    height: 18px;
    width: 18px;
  }
  .eye-pupil-left {
    left: 32px;
  }
  .eye-pupil-right {
    left: 5px;
  }
  .face {
    background-color: white;
    border: 2px solid black;
    border-top-left-radius: 45% 60%;
    border-top-right-radius: 45% 60%;
    border-bottom-left-radius: 60% 85%;
    border-bottom-right-radius: 60% 85%;
    height: 230px;
    margin: -30px auto;
    width: 270px;
    z-index: 5;
  }
  .nose {
    border: 2px solid black;
    height: 38px;
    margin: 16px auto 0;
    width: 38px;
    background-color: rgb(216, 5, 23);
  }
  .nose-light {
    height: 10px;
    right: 10px;
    top: 8px;
    width: 10px;
    background-color: white;
  }
  .nasal-groove {
    height: 45px;
    width: 2px;
    z-index: 12;
    background-color: black;
  }
  .bread-field {
    height: 44px;
    width: 240px;
    z-index: 10;
    background-color: white;
  }
  .bread {
    height: 2px;
    width: 80px;
  }
  .bread-left {
    left: 10px;
    transform-origin: right top;
  }
  .bread-left-1 {
    top: -5px;
    transform: rotate(20deg);
    background-color: black;
  }
  .bread-left-2 {
    top: 10px;
    transform: rotate(5deg);
    background-color: black;
  }
  .bread-left-3 {
    top: 20px;
    transform: rotate(-15deg);
    background-color: black;
  }
  .bread-right {
    right: 10px;
    transform-origin: left top;
  }
  .bread-right-1 {
    background-color: black;
    top: -5px;
    transform: rotate(-20deg);
  }
  .bread-right-2 {
    background-color: black;
    top: 10px;
    transform: rotate(-5deg);
  }
  .bread-right-3 {
    background-color: black;
    top: 20px;
    transform: rotate(15deg);
  }
  .lips {
    height: 10px;
    width: 250px;
  }
  .lips-center {
    background-color: white;
    height: 75px;
    overflow: hidden;
    width: 145px;
  }
  .lips-center-inside {
    background-color: #e80115;
    border: 2px solid black;
    border-top-left-radius: 65%;
    border-top-right-radius: 65%;
    border-style: none;
    border-top-style: solid;
    height: 75px;
    margin-left: -50px;
    width: 250px;
  }
  .lips-center-left {
    height: 40px;
    margin-left: 10px;
    overflow: hidden;
    width: 40px;
  }
  .lips-center-left-inside {
    background-color: white;
    border: 2px solid black;
    border-bottom-left-radius: 50% 50%;
    border-bottom-right-radius: 50% 50%;
    border-top: none;
    border-left: none;
    border-right: none;
    content: " ";
    display: block;
    height: 45px;
    margin-left: -30px;
    margin-top: -36px;
    width: 100px;
  }
  .lips-center-right {
    height: 40px;
    overflow: hidden;
    width: 40px;
  }
  .lips-center-right-inside {
    background-color: white;
    border: 2px solid black;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top: none;
    border-left: none;
    border-right: none;
    content: " ";
    display: block;
    height: 45px;
    margin-left: -34px;
    margin-top: -37px;
    width: 100px;
  }
  .lips-left {
    background-color: white;
    border: 2px solid black;
    border-top-left-radius: 60% 50%;
    border-top-right-radius: 0%;
    border-bottom-left-radius: 75% 50%;
    border-bottom-right-radius: 0%;
    border-right: none;
    height: 60px;
    left: -22px;
    top: -59px;
    width: 40px;
    transform: rotate(15deg);
  }
  .lips-right {
    background-color: white;
    border: 2px solid black;
    border-top-right-radius: 55% 50%;
    border-top-left-radius: 0%;
    border-bottom-right-radius: 80% 50%;
    border-bottom-left-radius: 0%;
    border-left: none;
    height: 60px;
    right: -22px;
    top: -59px;
    width: 40px;
    transform: rotate(-9deg);
  }
  .mouth {
    background-color: #e80115;
    border: 2px solid black;
    border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
    border-top: none;
    height: 150px;
    margin-top: -50px;
    width: 240px;
  }
  .tongue {
    background-color: #e80115;
    border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
    border-top: none;
    height: 65px;
    top: -30px;
    overflow: hidden;
    width: 170px;
  }
  .tongue-left {
    height: 65px;
    margin-top: 20px;
    margin-left: 15px;
    overflow: hidden;
    width: 80px;
    z-index: 2;
  }
  .tongue-left-inside {
    background-color: #ef6c1c;
    border: 2px solid black;
    border-top-left-radius: 50% 80%;
    border-top-right-radius: 50% 80%;
    border-bottom: none;
    height: 65px;
    width: 80px;
    z-index: 2;
    transform: rotate(-45deg);
  }
  .tongue-right {
    height: 60px;
    margin-top: -67px;
    margin-left: 83px;
    overflow: hidden;
    width: 80px;
    z-index: 3;
  }
  .tongue-right-inside {
    background-color: #ef6c1c;
    border: 2px solid black;
    border-top-left-radius: 50% 80%;
    border-top-right-radius: 50% 80%;
    border-bottom: none;
    margin-top: 2px;
    margin-left: -11px;
    height: 60px;
    width: 80px;
    z-index: 3;
    transform: rotate(45deg);
  }
`;
const paint = ()=>{
    if (string[n] === "\n") tempString = tempString + "<br>";
    else if (string[n] === " ") tempString = tempString + "&nbsp";
    else tempString = tempString + string[n];
    text.innerHTML = tempString;
    cssStyle.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    n = n + 1;
    if (n < string.length) painting();
};
function painting() {
    let start = ()=>{
        return window.setTimeout(paint, speed);
    };
    let stop = ()=>{
        window.clearTimeout(timer);
    };
    timer = start();
    pause.onclick = ()=>{
        console.log("pause");
        stop();
    };
    play.onclick = ()=>{
        console.log("play");
        start();
    };
    oneX.onclick = ()=>{
        console.log("1x");
        stop();
        speed = 80;
        start();
    };
    fourX.onclick = ()=>{
        console.log("4x");
        stop();
        speed = 20;
        start();
    };
    eightX.onclick = ()=>{
        console.log("8x");
        stop();
        speed = 5;
        start();
    };
}
painting();

//# sourceMappingURL=doraemon.de158e3a.js.map
