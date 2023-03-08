move = 1;
function turn(id) {
    if (move == 1) {
        document.getElementById(id).value = "X";
        document.getElementById(id).disabled = true;
    }
    else {
        document.getElementById(id).value = "O";
        document.getElementById(id).disabled = true;
    }
    move = (move + 1) % 2
}

function disable() {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
}

function outcome() {
 
    // Setting DOM to all boxes or input field
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
 
    // function for checking if there is a winner
    winner = 0;
    const checking = [[b1, b2, b3], [b1, b4, b7], [b7, b8, b9], [b3, b6, b9], [b1, b5, b9], [b3, b5, b7], [b2, b5, b8], [b4, b5, b6]]
    function check_win(val) {
        for (let i = 0; i < 8; i++) {
            if ((checking[i][0] == val) && (checking[i][1] == val) && (checking[i][2] == val)) {
                document.getElementById('print').innerHTML = "Player " + val + " won";
                disable()
                window.alert('Player ' + val + ' won');
                document.getElementById('print').innerHTML = "";
                winner = 1;
            }
        }
    }

    check_win('X');
    check_win('O');
 
    if ((b1 != "") && (b2 != "") && (b3 != "") && (b4 != "") && (b5 != "") && (b6 != "") && (b7 != "") && (b8 != "") && (b9 != "") && (winner != 1)) {
        document.getElementById('print').innerHTML = "Match Tie";
        window.alert('Match Tie');
        document.getElementById('print').innerHTML = "";
    }
    else {
        if (winner != 1) {
            if (move == 1) {
                document.getElementById('print').innerHTML = "Player X Turn";
            }
            else {
                document.getElementById('print').innerHTML = "Player 0 Turn";
            }
        }
        
    }
}

function reset_buttons() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
 
}