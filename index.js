function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}



let resultRandom = randomInteger(1, 10)
console.log(resultRandom)

let guessingNumber = parseInt(prompt('ayoo tebak nomor yuk bisa yukkk, pilihnya dari 1-10 yaa'))

for (guessingNumber == resultRandom; guessingNumber != resultRandom; guessingNumber = prompt('coba yukk')) {
    if (guessingNumber > resultRandom) {
        alert('kebanyakannn');
    } else if (guessingNumber < resultRandom) {
        alert('kurang shay');
    }


}

alert('yesss')