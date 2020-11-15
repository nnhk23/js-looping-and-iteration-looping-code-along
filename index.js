function writeCards(name, event){
    let cards = [];
    for(let i = 0; i < name.length; i++){
        cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return cards; 
}

function countDown(num){
    let i = 0;
    while (i <= num) {
        console.log(i++);
    }
}
