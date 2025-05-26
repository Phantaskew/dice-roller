

function rollDice(){
    const diceAmount = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const totalResult = document.getElementById("totalResult");
    const diceImages = document.getElementById("diceImages");
    const results = [];
    let total = 0;
    let images = [];

    for (let i = 0; i < diceAmount; i++){
        let result = Math.floor(Math.random() * 6) + 1;
        total += result;
        results.push(result);
        images.push(`<img src="DiceImages/${result}.png" alt="Dice ${result}">`);
    }

    diceResult.textContent = `Result: ${results.join(", ")}`;
    totalResult.textContent = `Total: ${total}`;
    diceImages.innerHTML = images.join("");
}