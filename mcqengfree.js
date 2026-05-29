const MCQ = [
{
q:"Attention residue lasts how long?",
a:["5 min","10 min","23 min","1 hour"],
c:2
}
];

function showMCQ(){
let box = document.getElementById("mcq");
box.innerHTML = "";

MCQ.forEach((m,i)=>{
box.innerHTML += `
<div>
<p>${m.q}</p>
${m.a.map((x,idx)=>`
<button onclick="check(${idx},${m.c})">${x}</button>
`).join("")}
</div>`;
});
}

function check(i,c){
if(i===c) addXP(10);
}