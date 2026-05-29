function getDay(){
let start = DB.get("startDay") || Date.now();
let diff = Math.floor((Date.now()-start)/(1000*60*60*24));
return diff+1;
}

function isUnlocked(day){
let hour = new Date().getHours();
return hour >= 0; // always true after midnight logic base
}