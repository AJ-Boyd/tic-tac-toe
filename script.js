/*
auth: AJ Boyd
date: 6/14/2024
desc: logic for tic-tac-toe
*/

var currTurn = 0;
var gameover = false
const TOKENS = ['X', 'O'];
const SPACES = document.getElementsByClassName("space");

function play(id){
    const space = document.getElementById("space" + id);
    
    if(space.innerText == "" && gameover == false){
        space.innerHTML = TOKENS[currTurn];
        space.style.color = (currTurn == 0) ? "red" : "blue";
        results = checkWin();

        if(results == -1){
            var tie = checkTie();
            
            if(tie){
                document.getElementById("console").innerHTML = "Catscratch!";
                document.getElementById("resetBtn").style.display = "block";
                return 1;
            }
        }else{
            document.getElementById("console").innerHTML = TOKENS[currTurn] + " WINS!";
            hightlightWin(results);
            gameover = true;
            document.getElementById("resetBtn").style.display = "block";
            
            return 0;
        }

        currTurn = (currTurn == 0) ? 1 : 0;
        document.getElementById("turn").innerHTML = TOKENS[currTurn];
    }
}

function checkWin(){
    for(var i = 0; i < TOKENS.length; i++){
        var token = TOKENS[i];

        //check vertical wins
        if(SPACES[0].innerHTML == token && SPACES[3].innerHTML == token && SPACES[6].innerHTML == token)
            return [0, 3, 6]
        else if(SPACES[1].innerHTML == token && SPACES[4].innerHTML == token && SPACES[7].innerHTML == token)
            return [1, 4, 7]
        else if(SPACES[2].innerHTML == token && SPACES[5].innerHTML == token && SPACES[8].innerHTML == token)
            return [2, 5, 8]
        //check horizontal wins
        if(SPACES[0].innerHTML == token && SPACES[1].innerHTML == token && SPACES[2].innerHTML == token)
            return [0, 1, 2]
        else if(SPACES[3].innerHTML == token && SPACES[4].innerHTML == token && SPACES[5].innerHTML == token)
            return [3, 4, 5]
        else if(SPACES[6].innerHTML == token && SPACES[7].innerHTML == token && SPACES[8].innerHTML == token)
            return [6, 7, 8]
        //check diagonal wins
        if(SPACES[0].innerHTML == token && SPACES[4].innerHTML == token && SPACES[8].innerHTML == token)
            return [0, 4, 8]
        else if(SPACES[2].innerHTML == token && SPACES[4].innerHTML == token && SPACES[6].innerHTML == token)
            return [2, 4, 6]
        else{
            if(i == 1)
                return [-1] //no win
        }
    }
}

function checkTie(){
    for(var i = 0; i < SPACES.length; i++){
        if(SPACES[i].innerHTML == ""){
            // alert(i + " " + SPACES[i].innerHTML)
            return false;
        }
    }
    return true;
}

function hightlightWin(results){
    var SPACES = document.getElementsByClassName("space");
    
    for(var i = 0; i < results.length; i++){
        SPACES[results[i]].style.backgroundColor = "#ccff99";
    }

}