/**
 * give me one grand today night
 * give one grand today
 * Yes
 *
 * ive got a lovely bunch of coconuts
 * ive got some coconuts
 * No
 *
 */
function checkMagazine(magazine, note) {
    let notesDict = {};

    for(let word of note) {
        if(notesDict[word] == undefined) {
            notesDict[word] = 1;
        } else {
            notesDict[word]++;
        }
    }

    for(let word of magazine) {
        if(notesDict[word] != undefined) {
            notesDict[word]--;
        }
    }

    for(let i in notesDict) {
        if(notesDict[i] > 0) {
            console.log("No");
            return;
        }
    }

    console.log("Yes");
}

let magazine = "give me one grand today night".split(" ")
let note = "give one grand today".split(" ")
checkMagazine(magazine, note);

magazine = "ive got a lovely bunch of coconuts".split(" ")
note = "ive got some coconuts".split(" ")
checkMagazine(magazine, note);
