/*Screen Changes*/

document.querySelector('.never-play-js').addEventListener('click', () =>
{
    document.querySelector('.enter-screen').style.display = 'none';
    document.querySelector('.welcome-screen').style.display = 'flex';
});

document.querySelector('.already-play-js').addEventListener('click', () =>
{
    document.querySelector('.enter-screen').style.display = 'none';
    document.querySelector('.player-screen').style.display = 'flex';
});

document.querySelector('.welcome-button-js').addEventListener('click', () =>
{
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.player-screen').style.display = 'flex';
    document.querySelector('.welcome-button-js').style.display = 'none';
});

document.querySelector('.player1-js').addEventListener('click', () =>
{
    document.querySelector('.player-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'flex';
    nbPlayers = 1;
    generateSelectKey(nbPlayers);
});

document.querySelector('.player2-js').addEventListener('click', () =>
{
    document.querySelector('.player-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'flex';
    nbPlayers = 2;
    generateSelectKey(nbPlayers);
});

document.querySelector('.player3-js').addEventListener('click', () =>
{
    document.querySelector('.player-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'flex';
    nbPlayers = 3;
    generateSelectKey(nbPlayers);
});

document.querySelector('.player4-js').addEventListener('click', () =>
{
    document.querySelector('.player-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'flex';
    nbPlayers = 4;
    generateSelectKey(nbPlayers);
});

/*Welcome Timeout Functions*/

setTimeout(() => {
    document.querySelector('.welcome1').style.display = 'none';
    document.querySelector('.welcome2').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.welcome2').style.display = 'none';
        document.querySelector('.welcome3').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.welcome3').style.display = 'none';
            document.querySelector('.welcome4').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.welcome4').style.display = 'none';
                document.querySelector('.welcome-button-js').style.display = 'block';
            },3500)
        },3500)
    },2000)
}, 2000);

/*Number Player Functions*/

let nbPlayers

function generateSelectKey(nbPlayers){
    for (let i = 1; i <= nbPlayers; i++){
        let currentHtml = document.querySelector('.player-keys-container').innerHTML;
        document.querySelector('.player-keys-container').innerHTML=currentHtml + '<div class="player-button ' + 'player'+ i +'"><p>?</p></div>';
        document.querySelector('.select-key-player').innerHTML='<p>Joueur '+ i +' choisissez votre touche</p>';
        window.addEventListener("keydown", (i) =>{
            let key = event.key.toUpperCase();
            document.querySelector('.player'+i).innerHTML='<p>' + key + '</p>';
            console.log(key)
      })
    }
}

// Fonction dans fonction avec if button 3 players ect 

// boucle for = createElement, appendChild, classList.add, innerText

// addEventListener au clavier, recupere valeur selectionné et devient une variable + innerText