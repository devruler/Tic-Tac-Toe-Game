let winner = false

let winning_moves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]

let player_x = 'X'
let player_o = 'O'

let current_player = player_x

let player_x_moves = []
let player_o_moves = []

function handleStatus() {
    let message_box = document.getElementById('status')
    let number_of_moves = player_x_moves.length + player_o_moves.length
    if(winner){
        message_box.innerHTML = 'The winner is ' + winner
    }else if(number_of_moves > 8){
        message_box.innerHTML = 'Draw!'
    }    
    else{
        if(current_player === 'X'){
            message_box.innerHTML = 'This is player X Turn'
        }else{
            message_box.innerHTML = 'This is player O Turn'

        }
    }
}

// initiate game status

handleStatus()

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', handleClick)
})

function handleClick(e){

    let element = e.target

    if(!winner){
        if(element.innerHTML !== 'X' && element.innerHTML !== 'O'){

            element.innerHTML = current_player
            let box_num = element.getAttribute('data-box')
    
            if(current_player === 'X'){
                player_x_moves.push(parseInt(box_num))
            }else{
                player_o_moves.push(parseInt(box_num))
            }
    
            checkForWin()
  
            current_player = handlePlayerTurn()

            handleStatus()
    
            
        }
    }
    
}

function checkForWin(){

    if(current_player === 'X'){
        winning_moves.forEach(moves => {

            let win_move_counter = 0

            for(let i = 0; i < player_x_moves.length ;i++){

                if(player_x_moves[i] === moves[0]){
                    win_move_counter++
                }
                if(player_x_moves[i] === moves[1]){
                    win_move_counter++
                }
                if(player_x_moves[i] === moves[2]){
                    win_move_counter++
                }

                if(win_move_counter === 3){
                    winner = 'X'
                }
            }

        })
    }else{

        winning_moves.forEach(moves => {
            let win_move_counter = 0

            for(let i = 0; i < player_o_moves.length ;i++){

                if(player_o_moves[i] === moves[0]){
                    win_move_counter++
                }
                if(player_o_moves[i] === moves[1]){
                    win_move_counter++
                }
                if(player_o_moves[i] === moves[2]){
                    win_move_counter++
                }

                if(win_move_counter === 3){
                    winner = 'O'
                }
            }

        })

    }

}

function handlePlayerTurn(){
    return current_player === "X" ? "O" : "X"
}
