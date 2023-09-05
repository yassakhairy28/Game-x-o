    let title = document.querySelector(".title")
    let turn = "x"
    let squares = []
    function win (num1, num2,num3) {
        title.innerHTML = `${squares[num1]} Winner`
        document.getElementById("item"+num1).style.backgroundColor = "black"
        document.getElementById("item"+num2).style.backgroundColor = "black"
        document.getElementById("item"+num3).style.backgroundColor = "black"

        setInterval(function() {title.innerHTML += "."}, 800)
        setTimeout(function() {location.reload()},2400)
    }
    function winner() {
        for (i = 1; i <= 9; i++) {
            squares [i] = document.querySelector("#item" + i).innerHTML
        }   
        if (squares[1] == squares[2] && squares[2] == squares [3] && squares[2] != "") {
            win(1,2,3)
        } 
        else if (squares[4] == squares[5] && squares[5] == squares [6] && squares[5] != "") {
            win(4,5,6)
        }
        else if (squares[7] == squares[8] && squares[8] == squares [9] && squares[7] != "") {
            win(7,8,9)
        }
        else if (squares[1] == squares[5] && squares[5] == squares [9] && squares[5] != "") {
            win(1,5,9)
        }
        else if (squares[3] == squares[5] && squares[5] == squares [7] && squares[5] != "") {
            win(3,5,7)
        }
        else if (squares[1] == squares[4] && squares[4] == squares [7] && squares[4] != "") {
            win(1,4,7)
        }
        else if (squares[2] == squares[5] && squares[5] == squares [8] && squares[5] != "") {
            win(2,5,8)
        }
        else if (squares[3] == squares[6] && squares[6] == squares [9] && squares[6] != "") {
            win(3,6,9)
        }
    }
    function game (id) {
        let element = document.getElementById(id)

        if (turn === "x" && element.innerHTML == "") {
            element.innerHTML = "x"
            turn = "o"
            title.innerHTML = "o"
        } 
        else if (turn === "o" && element.innerHTML == "") {
            element.innerHTML = "o"
            turn = "x"
            title.innerHTML = "X"
        }
        winner()
    }