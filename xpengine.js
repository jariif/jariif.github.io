function addXP(val){
let xp = DB.get("xp") || 0;
xp += val;
DB.set("xp", xp);
}