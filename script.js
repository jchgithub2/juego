/* Funciones para el juego
*/
//funcion que obtien elemento de  array aleatoriamente.
function getComputerChoiceque() {
    let i = ['piedra', 'papel', 'tijera'];
    
        const randonIndex =Math.floor(Math.random() * i.length);// elige un indice aleatorio del array i.
        
        return i[randonIndex];//devuelve la eleccion
}
console.log(getComputerChoiceque());//llama alaa funcion e imprime la eleccion


// Funcion que produce una ronda del juego
function playRound(playerSelection, computerSelection) {
    // las hace no sensibles a mayusculas y minusculas
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    // Verifica si las selecciones son iguales
    if (player === computer) {
        return "¡Es un empate!."
    }
    //reglas del juego para determinar un ganador
    if (
        (player === "piedra" && computer === "tijera") ||
        (player === "papel" && computer === "piedra") ||
        (player === "tijera" && computer === "papel")
    ) {
        return `¡Jugador gana! ${playerSelection}.`;
    } else {
        return `¡Computadora gana! ${computerSelection}.`;
    }
    }
   
   // const playerSelection ='';
    const computerSelection = getComputerChoiceque();
    //console.log(playRound(playerSelection, computerSelection));
    
    // Funcion game contiene puntuacion e informa el ganador
    function game() {
        let playerScore = 0;
        let computerScore = 0;

        for (let i = 0; i < 5; i++) {            
            const playerSelection = prompt("Elije: piedra, papel o tijera").toLowerCase();
            const computerSelection = getComputerChoiceque();

            const result = playRound(playerSelection, computerSelection);
            console.log(result);

            if (result.includes("Jugador gana")) {
                playerScore++;
            }else if (result.includes("Computadora gana"))
            {
            computerScore++;
            }
        }

        if (playerScore > computerScore) {
            console.log("!Jugador gana el juego!");
        } else if (computerScore > playerScore) {
            console.log("!Computadora gana el juego!");
        } else {
            console.log("!No hay ganador en el juego es un EMPATE!");
        }
    }
   game(); 
    
//console.log(game());