let isCircleTurn = false;
let board = new Array(9);

function setElementBackgroudImage(squre, imageUrl){
    $(squre).css('background-image', 'url('+imageUrl+')');
    $(squre).css('background-size', 'cover');
}

function initBoard(){
    for (let index = 0; index < board.length; index++) {
        board[index] = 'N';
    }
}

function putXorCircleInBoard(squre){
    let squreIndex = $(squre).attr('id');
    board[squreIndex] = isCircleTurn ? 'O' : 'X';
    console.log(board);
}

function checkIfSomeoneWon(){
    let simbol = isCircleTurn ? 'O' : 'X';
    if(board[4] === simbol){
        if(board[0] === simbol && board[8] === simbol)
            return [4,0,8];
        if(board[1] === simbol && board[7] === simbol)
            return [4,1,7];
        if(board[2] === simbol && board[6] === simbol)
            return [4,2,6];
        if(board[3] === simbol && board[5] === simbol)
            return [4,3,5];
    }
    else if(board[0] === simbol){
        if(board[1] === simbol && board[2] === simbol)
            return [0,1,2];
        if(board[3] === simbol && board[6] === simbol)
            return [0,3,6];
    }
    else if(board[8] === simbol){
        if(board[6] === simbol && board[7] === simbol)
            return [8,6,7];
        if(board[2] === simbol && board[5] === simbol)
            return [8,2,5];
    }
    return false;
}

function highlightSqures(squresIds){
    squresIds.forEach(id => {
        $('#'+id).css('border', '5px solid aqua');
    });
}

$(document).ready(function () {

    initBoard();
    $(".squre").click(function () {

        if(isCircleTurn){
            setElementBackgroudImage(this,"circle.png");
        }
        else{
            setElementBackgroudImage(this,"x.png");
        }

        putXorCircleInBoard(this);
        console.log(checkIfSomeoneWon());

        let squreIds = checkIfSomeoneWon();
        if(squreIds)
            highlightSqures(squreIds);

        isCircleTurn = isCircleTurn ? false : true;
    });


    $("#restart-btn").click(function () {
        setElementBackgroudImage(".squre","");
        initBoard();
        $(".squre").css('border', '');
        console.log(board);
    });

  });