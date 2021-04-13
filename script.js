const notes = [4, 73, 67, 38, 33]

function round(x) { return Math.ceil(x/5)*5; }

roundNotes = notes.map(note => {
    newNotes = round(note);
    if  (note < 40){ return note + " => échec"}else { 
    if (newNotes- note >= 3){
        return "La note reste "+note;
    } else {
        return "L'élève passe de "+note +" à "+newNotes;
    }}
})
console.log(roundNotes)
