/*Screen Changes*/

/*Enlever les ;*/

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

let nbPlayers;

let keys = []

let player = 1;

function generateSelectKey(nbPlayers){
    for (let i = 1; i <= nbPlayers; i++){
        let currentHtml = document.querySelector('.player-keys-container').innerHTML;
        document.querySelector('.player-keys-container').innerHTML=currentHtml + '<div class="player-button player'+ i +'"><p>?</p><canvas class="canvas' + i + '" height="10" width="1403"></canvas></div>';
        document.querySelector('.select-key-player').innerHTML='<p>Joueur '+ player +' choisissez votre touche</p>';
    }
    window.addEventListener("keydown", (e) =>{
        keys[keys.length] = e.key.toUpperCase()
        document.querySelector('.player'+keys.length).innerHTML='<p>' + keys[keys.length - 1] + '</p><canvas class="canvas' + keys.length + '" height="10" width="1403"></canvas>';
        player++;
        if(nbPlayers >= player){
            document.querySelector('.select-key-player').innerHTML='<p>Joueur '+ player +' choisissez votre touche</p>';
        } else {
            setTimeout(() => {
                document.querySelector('.select-key-player').innerHTML='<p>3</p>';
                setTimeout(() => {
                    document.querySelector('.select-key-player').innerHTML='<p>2</p>';
                    setTimeout(() => {
                        document.querySelector('.select-key-player').innerHTML='<p>1</p>';
                        setTimeout(() => {
                            document.querySelector('.select-key-player').innerHTML="<p>C'est Partit !</p>";
                            StartGame() 
                            setTimeout(() => {
                                document.querySelector('.select-key-player').innerHTML="";
                            },1000)
                        },1000)
                    },1000)
                },1000)
            }, 0);
        }
    })
}

function StartCountdown(){
    setTimeout(() => {
        document.querySelector('.select-key-player').innerHTML='<p>3</p>';
        setTimeout(() => {
            document.querySelector('.select-key-player').innerHTML='<p>2</p>';
            setTimeout(() => {
                document.querySelector('.select-key-player').innerHTML='<p>1</p>';
                setTimeout(() => {
                    document.querySelector('.select-key-player').innerHTML="<p>C'est Partit !</p>";
                    StartGame() 
                    setTimeout(() => {
                        document.querySelector('.select-key-player').innerHTML="";
                    },1000)
                },1000)
            },1000)
        },1000)
    }, 0);
}

function StartGame(){
    document.querySelector('canvas').style.display = "flex"; //Cela Marche que pour le premier canvas, j'ai essayer pleins de trucs mais rien ne marche, si tu trouve un truc, va check dans inspecter les noms des classes ect
}


// Fonction dans fonction avec if button 3 players ect 

// boucle for = createElement, appendChild, classList.add, innerText

// addEventListener au clavier, recupere valeur selectionné et devient une variable + innerText
