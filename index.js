// Code your solutions in this file


function writeCards(arrayofnames, eventname) {
    let birthdayCards = []

    for (let i = 0; i < arrayofnames.length; i++ ) {
     birthdayCards.push(`Thank you, ${arrayofnames[i]}, for the wonderful ${eventname} gift!`)
    }
    return birthdayCards
}

function countDown(providedNumber) {
    while  (providedNumber > 0) {
        console.log( providedNumber);
        providedNumber -= 1;
    }
    console.log(providedNumber)
}
