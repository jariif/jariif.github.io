function render(){
let day = getDay();
let app = document.getElementById("app");

let locked = !isUnlocked(day);

app.innerHTML = `
<div class="day-card ${locked ? 'hidden':''}">
<h2>Day ${day}: ${DAYS[day]}</h2>

<p>Start your session</p>

<button class="green" onclick="startTimer(1)">Start Session</button>

<div id="timer"></div>

<div id="mcq"></div>
</div>
`;

if(!locked){
showMCQ();
}
}

render();

window.addEventListener("sessionEnd",()=>{
showMCQ();
addXP(20);
});