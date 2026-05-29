function startTimer(min){
let sec = min * 60;

let t = setInterval(()=>{
sec--;
document.getElementById("timer").innerText = sec;

if(sec<=0){
clearInterval(t);
window.dispatchEvent(new Event("sessionEnd"));
}
},1000);
}