const numOfDice = document.getElementById('numOfDice');
const diceResult = document.getElementById('diceResult');
const diceImages = document.getElementById('diceImages');


function rollDice(){
    const values =[];
    const images = [];

    for (let i = 0; i < numOfDice.value; i++ ) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value)
        images.push(`<img src="dice_images/${value}.svg" />`)
    }

    diceResult.textContent = `Dice : ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
}