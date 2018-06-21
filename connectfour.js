class Board{
    constructor(){
        this.arr = [];
        for(var i = 0; i < 6; i++){
            this.arr[i] = [];
            for(var j = 0; j < 7; j++){
                this.arr[i][j] = "e";
            }
        }
    }

    printBoard(){
        for(var i = 0; i < 6; i++){
            for(var j = 0; j < 7; j++){
                console.log(this.arr[i][j]+"|");
            }
        }
    }

    checkBoardState(){

    }
}

$("#board")