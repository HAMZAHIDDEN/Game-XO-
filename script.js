let turn = 'x';
let title = document.querySelector('.header');
let squars = [];

function end(num1,num2,num3){
    title.innerHTML = `${squars[num1]} winner ` ;
    document.getElementById('item'+ num1).style.backgroundColor='#000';
    document.getElementById('item'+ num2).style.backgroundColor='#000';
    document.getElementById('item'+ num3).style.backgroundColor='#000';

    setInterval(function(){
        title.innerHTML += '.'
    },1000);
    setTimeout(function(){
        location.reload()
    },4000);
}

function winner(){
        /*
        squars[i] = document.getElementById('item' + i).innerHTML;
        'item' + i: Dynamically creates the ID name (e.g., 'item1', 'item2', ... 'item9').
         */ 
    for(let i=1; i<10 ; i++){
        squars[i] = document.getElementById('item' + i).innerHTML;
    }
        
    // rows
    if (squars[1] == squars[2] && squars[2] == squars[3] && squars[1] != '') {
       end(1,2,3);
    } 
    else if (squars[4] == squars[5] && squars[5] == squars[6] && squars[4] != '') {
        end(4,5,6);

    } 
    else if (squars[7] == squars[8] && squars[8] == squars[9] && squars[7] != '') {
        end(7,8,9)
    }

    // --- Columns ---
    else if (squars[1] == squars[4] && squars[4] == squars[7] && squars[1] != '') {
        end(1,4,7)
    } 
    else if (squars[2] == squars[5] && squars[5] == squars[8] && squars[2] != '') {
       end(2,5,8)
    } 
    else if (squars[3] == squars[6] && squars[6] == squars[9] && squars[3] != '') {
        end3(3,6,9)
    }

    // --- Diagonals ---
    else if (squars[1] == squars[5] && squars[5] == squars[9] && squars[1] != '') {
        end(1,5,9)
    } 
    else if (squars[3] == squars[5] && squars[5] == squars[7] && squars[3] != '') {
        end(3,5,7)
    }
}

function game(id) {
    let element = document.getElementById(id);

    // If it's X's turn and the cell is empty
    if (turn === 'x' && element.innerHTML === '') {
        element.innerHTML = 'x'; 
        turn = 'o';
        title.innerHTML = '<span>O</span> Turn';
    } 
    // If it's O's turn and the cell is empty
    else if (turn === 'o' && element.innerHTML === '') {
        element.innerHTML = 'o'; 
        turn = 'x';
        title.innerHTML = '<span>X</span> Turn';
    }
    winner();
}