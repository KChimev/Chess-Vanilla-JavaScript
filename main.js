//VARIABLES
const letters=["A",
"B",
"C",
"D",
"E",
"F",
"G",
"H"];
//USED TO SELECT DIFFRENT COMBINATIONS OF BLACK AND WHITE PIECES
const piecesBlackArr=[
    {
        name:"Rook",
        img:"images/bRook.png"
    },
    {
        name:"Knight",
        img:"images/bKnight.png"
    },
    {
        name:"Bishop",
        img:"images/bBishop.png"
    },
    {
        name:"Queen",
        img:"images/bQueen.png"
    },
    {
        name:"King",
        img:"images/bKing.png"
    },
    {
        name:"Bishop",
        img:"images/bBishop.png"
    },
    {
        name:"Knight",
        img:"images/bKnight.png"
    },
    {
        name:"Rook",
        img:"images/bRook.png"
    }
];
const piecesWhiteArr=[ {
    name:"Rook",
    img:"images/wRook.png"
},
{
    name:"Knight",
    img:"images/wKnight.png"
},
{
    name:"Bishop",
    img:"images/wBishop.png"
},
{
    name:"Queen",
    img:"images/wQueen.png"
},
{
    name:"King",
    img:"images/wKing.png"
},
{
    name:"Bishop",
    img:"images/wBishop.png"
},
{
    name:"Knight",
    img:"images/wKnight.png"
},
{
    name:"Rook",
    img:"images/wRook.png"
},];
const piecesPawns=[{
    name:"Pawn",
    img:"images/bPawn.png"
},
{
    name:"Pawn",
    img:"images/wPawn.png"
}];
const blackPiecesAll=[
    {
        name:"Rook",
        img:"images/bRook.png"
    },
    {
        name:"Knight",
        img:"images/bKnight.png"
    },
    {
        name:"Bishop",
        img:"images/bBishop.png"
    },
    {
        name:"Queen",
        img:"images/bQueen.png"
    },
    {
        name:"King",
        img:"images/bKing.png"
    },
    {
        name:"Bishop",
        img:"images/bBishop.png"
    },
    {
        name:"Knight",
        img:"images/bKnight.png"
    },
    {
        name:"Pawn",
        img:"images/bPawn.png"
    },
];
const whitePiecesAll=[
    {
        name:"Rook",
        img:"images/wRook.png"
    },
    {
        name:"Knight",
        img:"images/wKnight.png"
    },
    {
        name:"Bishop",
        img:"images/wBishop.png"
    },
    {
        name:"Queen",
        img:"images/wQueen.png"
    },
    {
        name:"King",
        img:"images/wKing.png"
    },
    {
        name:"Bishop",
        img:"images/wBishop.png"
    },
    {
        name:"Knight",
        img:"images/wKnight.png"
    },
    {
        name:"Pawn",
        img:"images/wPawn.png"
    }
];
let selectedPIece=1;
var possibleMoves=[];
var pieceColor;
var PLAYER="WHITE";
var returnAttributes=[];
let movedPiece;
let startingPieces=[
    {
        name:"whiteRook",
        img:"images/wRook.png",
        count:2,
    },
    {
        name:"whiteKnight",
        img:"images/wKnight.png",
        count:2,
    },
    {
        name:"whiteBishop",
        img:"images/wBishop.png",
        count:2,
    },
    {
        name:"whiteQueen",
        img:"images/wQueen.png",
        count:1,
    },
    {
        name:"whiteKing",
        img:"images/wKing.png",
        count:1,
    },
    {
        name:"whitePawn",
        img:"images/wPawn.png",
        count:8
    },
    {
        name:"blackRook",
        img:"images/bRook.png",
        count:2,
    },
    {
        name:"blackKnight",
        img:"images/bKnight.png",
        count:2,
    },
    {
        name:"whiteBishop",
        img:"images/bBishop.png",
        count:2,
    },
    {
        name:"blackQueen",
        img:"images/bQueen.png",
        count:1,
    },
    {
        name:"blackKing",
        img:"images/bKing.png",
        count:1,
    },
    {
        name:"blackPawn",
        img:"images/bPawn.png",
        count:8
    }
];
let takenPieces=[
    {
        name:"whiteRook",
        img:"images/wRook.png",
        count:2,
    },
    {
        name:"whiteKnight",
        img:"images/wKnight.png",
        count:2,
    },
    {
        name:"whiteBishop",
        img:"images/wBishop.png",
        count:2,
    },
    {
        name:"whiteQueen",
        img:"images/wQueen.png",
        count:1,
    },
    {
        name:"whiteKing",
        img:"images/wKing.png",
        count:1,
    },
    {
        name:"whitePawn",
        img:"images/wPawn.png",
        count:8
    },
    {
        name:"blackRook",
        img:"images/bRook.png",
        count:2,
    },
    {
        name:"blackKnight",
        img:"images/bKnight.png",
        count:2,
    },
    {
        name:"whiteBishop",
        img:"images/bBishop.png",
        count:2,
    },
    {
        name:"blackQueen",
        img:"images/bQueen.png",
        count:1,
    },
    {
        name:"blackKing",
        img:"images/bKing.png",
        count:1,
    },
    {
        name:"blackPawn",
        img:"images/bPawn.png",
        count:8
    }
];
let B=1;
let W=1;
let Check;
const moveArr=[
    {name:"QueenMove(event)"},
    {name:"BishopMove(event)"},
    {name:"RookMove(event)"},
    {name:"KnightMove(event)"},
    {name:"KingMove(event)"},
    {name:"PawnMove(event)"},
]
//PLACES THE PIECES ON THE STARTING TILES AND SETS INITIAL MOVING FUNCTIONS
function createBoard(){
for(let i=0;i<8;i++){
    let str=letters[i]+8;
    let tile=document.getElementById(str);
    let piece=document.createElement("img");
    piece.setAttribute("src",piecesBlackArr[i].img);
    piece.setAttribute(`class`,`piece ${str}`);
    tile.appendChild(piece)
}
for(let k=0 ;k<8;k++){
    let str=letters[k]+1;
    let tile=document.getElementById(str);
    let piece=document.createElement("img");
    piece.setAttribute("src",piecesWhiteArr[k].img);
    piece.setAttribute(`class`,`piece ${str}`);
    tile.appendChild(piece)
}
for(let m=0;m<8;m++){
    let str=letters[m]+7;
    let strWhite=letters[m]+2;
    let tile=document.getElementById(str);
    let tileWhite=document.getElementById(strWhite);
    let piece=document.createElement("img");
    let pieceWhite=document.createElement("img");
    piece.setAttribute("src",piecesPawns[0].img);
    piece.setAttribute(`class`,`piece ${str}`);
    pieceWhite.setAttribute("src",piecesPawns[1].img);
    pieceWhite.setAttribute(`class`,`piece ${str}`);
    tile.appendChild(piece);
    tileWhite.appendChild(pieceWhite);
    tileWhite.setAttribute("onclick","whitePawnMove(event)");
    tile.setAttribute("onclick","blackPawnMove(event)");
}
}
//SET UNOCUPIED TILES DATA, COLORS THE TILES AND REMOVE ONCLICK OF EMPTY TILES
function updateTiles(){
    for(let i=1;i<9;i++){
        for(let m=0;m<8;m++){
            let str=letters[m]+i;
            let child = document.getElementById(str).lastChild;
            if(document.getElementById(str).hasChildNodes()==true){
                //CHECKING PIECE PLACEMENT
                if(child.nodeName=="IMG"){
                    //WHITE PIECES
                        if(child.getAttribute("src")==whitePiecesAll[7].img){
                            document.getElementById(str).setAttribute("data","occupiedW");
                            document.getElementById(str).setAttribute("onclick","whitePawnMove(event)");
                            takenPieces[5].count++;
                        }
                        if(child.getAttribute("src")==whitePiecesAll[4].img){
                            document.getElementById(str).setAttribute("data","occupiedW");
                            document.getElementById(str).setAttribute("onclick","whiteKingMove(event)");
                            document.getElementById(str).setAttribute("data-king","king-white");
                            takenPieces[4].count++;
                        }
                        if(child.getAttribute("src")==whitePiecesAll[3].img){
                            document.getElementById(str).setAttribute("data","occupiedW");
                            document.getElementById(str).setAttribute("onclick","whiteQueenMove(event)");
                            takenPieces[3].count++;
                        }
                        if(child.getAttribute("src")==whitePiecesAll[2].img){
                            document.getElementById(str).setAttribute("data","occupiedW");
                            document.getElementById(str).setAttribute("onclick","whiteBishopMove(event)");
                            takenPieces[2].count++;
                        }
                        if(child.getAttribute("src")==whitePiecesAll[1].img){
                            document.getElementById(str).setAttribute("data","occupiedW");
                            document.getElementById(str).setAttribute("onclick","whiteKnightMove(event)");
                            takenPieces[1].count++;
                        }
                        if(child.getAttribute("src")==whitePiecesAll[0].img){
                            document.getElementById(str).setAttribute("data","occupiedW");
                            document.getElementById(str).setAttribute("onclick","whiteRookMove(event)");
                            takenPieces[0].count++;
                        }
                    //BLACK PIECES
                        if(child.getAttribute("src")==blackPiecesAll[7].img){
                            document.getElementById(str).setAttribute("data","occupiedB");
                            document.getElementById(str).setAttribute("onclick","blackPawnMove(event)");
                            takenPieces[11].count++;
                        }
                        if(child.getAttribute("src")==blackPiecesAll[4].img){
                            document.getElementById(str).setAttribute("data","occupiedB");
                            document.getElementById(str).setAttribute("onclick","blackKingMove(event)");
                            document.getElementById(str).setAttribute("data-king","king-black");
                            takenPieces[10].count++;
                        }
                        if(child.getAttribute("src")==blackPiecesAll[3].img){
                            document.getElementById(str).setAttribute("data","occupiedB");
                            document.getElementById(str).setAttribute("onclick","blackQueenMove(event)");
                            takenPieces[9].count++;
                        }
                        if(child.getAttribute("src")==blackPiecesAll[2].img){
                            document.getElementById(str).setAttribute("data","occupiedB");
                            document.getElementById(str).setAttribute("onclick","blackBishopMove(event)");
                            takenPieces[8].count++;
                        }
                        if(child.getAttribute("src")==blackPiecesAll[1].img){
                            document.getElementById(str).setAttribute("data","occupiedB");
                            document.getElementById(str).setAttribute("onclick","blackKnightMove(event)");
                            takenPieces[7].count++;
                        }
                        if(child.getAttribute("src")==blackPiecesAll[0].img){
                            document.getElementById(str).setAttribute("data","occupiedB");
                            document.getElementById(str).setAttribute("onclick","blackRookMove(event)");
                            takenPieces[6].count++;
                        }
                    //CHECKING TILE COLOR
                    let tile=document.getElementById(str);
                    if(tile.getAttribute("class")=="tile light"){
                        document.getElementById(str).style.backgroundColor="#F5EBE0";
                    }
                    if(tile.getAttribute("class")=="tile dark"){
                        document.getElementById(str).style.backgroundColor="#829460";
                    }
                }
                else{
                    document.getElementById(str).setAttribute("data","unoccupied")
                    document.getElementById(str).removeAttribute("onclick");
                    let tile=document.getElementById(str);
                    if(tile.getAttribute("class")=="tile light"){
                        document.getElementById(str).style.backgroundColor="#F5EBE0";
                    }
                    if(tile.getAttribute("class")=="tile dark"){
                    document.getElementById(str).style.backgroundColor="#829460";
                    }
                }
            }
            else if(document.getElementById(str).hasChildNodes()==false){
                document.getElementById(str).setAttribute("data","unoccupied")
                document.getElementById(str).removeAttribute("onclick");
                let tile=document.getElementById(str);
                if(tile.getAttribute("class")=="tile light"){
                    document.getElementById(str).style.backgroundColor="#F5EBE0";
                }
                if(tile.getAttribute("class")=="tile dark"){
                    document.getElementById(str).style.backgroundColor="#829460";
                }
            }
        }
    }
    possibleMoves=[];
    checkTakenPieces();
    checkKing();
}
//CHECKS FOR TAKEN PIECES AND PUTS THEM INTO THE DIVS FOR VISUALISATION
function checkTakenPieces(){
    for(let i=0;i<12;i++){
        if(takenPieces[i].count-startingPieces[i].count==startingPieces[i].count){
            takenPieces[i].count/=2;
        }
        else if(takenPieces[i].count-startingPieces[i].count!==startingPieces[i].count){
            takenPieces[i].count=(takenPieces[i].count-1)/2;
            startingPieces[i].count--;
            if(i>6){
                let takenPiece=document.createElement("img");
                takenPiece.setAttribute("src", takenPieces[i].img);
                let blackTaken=document.getElementById(B+"B");
                B++;
                blackTaken.appendChild(takenPiece);
            }
            if(i<7){
                let takenPiece=document.createElement("img");
                takenPiece.setAttribute("src", takenPieces[i].img);
                let whiteTaken=document.getElementById(W+"W");
                W++;
                whiteTaken.appendChild(takenPiece);
            }
        }
    }
}
//USED TO REMOVE AND REPLACE TAKEN PIECES 
function clearPIeces(target,remove){
    let removeChild=document.getElementById(remove).lastChild;
    if(document.getElementById(remove).hasChildNodes()==true){
        if(removeChild.nodeName=="IMG"){                   
            document.getElementById(remove).removeChild(removeChild);
    }
}
            let child = target.lastChild;
            if(target.hasChildNodes()==true){
                if(child.nodeName=="IMG"){                   
                    if(target.getAttribute("onclick")=="moveRook(event)" || target.getAttribute("onclick")=="movePawn(event)" || 
                    target.getAttribute("onclick")=="moveKnight(event)"||target.getAttribute("onclick")=="moveBishop(event)" ||
                    target.getAttribute("onclick")=="moveQueen(event)"|| target.getAttribute("onclick")=="moveKing(event)"
                    ||target.getAttribute("onclick")=="castle(event)"){
                        target.removeChild(child);
                }
            }
        }
}
//USED TO COLOR THE PATHS OF MOVING PIECES
function tilesPath(tile){
    if(tile.getAttribute("class")=="tile light"){
        tile.style.backgroundColor="#f6c1c1";
    }
    if(tile.getAttribute("class")=="tile dark"){
        tile.style.backgroundColor="#954949";
    }
}

createBoard();
updateTiles();


                                                                    //MOVEMENT OF PIECES AND GAME DYNAMICS


//PAWNS SELECTION AND MOVEMENT
function whitePawnMove(event){
if(PLAYER=="BLACK"){
    return;
}
updateTiles();
pieceColor="white";
movedPiece=event.currentTarget.id;
let targetId=event.currentTarget.id.charAt(0,1);
let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);
let canCapture="No";
pawnTake(event.currentTarget,targetNum);
function pawnTake(target,num){ 
    let capture=[];
    tileTakeOne=letters[letters.indexOf(target.id.charAt(0,1))-1]+(num+1);
    tileTakeTwo=letters[letters.indexOf(target.id.charAt(0,1))+1]+(num+1);
    if(typeof tileTakeOne=="string"){
        capture.push(tileTakeOne);
    }
    if(typeof tileTakeTwo=="string"){
        capture.push(tileTakeTwo);
    }
    for(let i=0;i<capture.length;i++){
        if(document.getElementById(capture[i]).getAttribute("data")=="occupiedB"){
        let child=document.getElementById(capture[i]).lastChild;
    for(let j=0;j<whitePiecesAll.length;j++){
    if(child.getAttribute("src")==blackPiecesAll[j].img){
        possibleMoves.push(capture[i]);
    }
    }
}
}
if(possibleMoves.length>0){
    canCapture="Yes";
}    
else{
    possibleMoves=[];
    canCapture="No";
}
}
possibleMoves.unshift(event.currentTarget.id);
if(canCapture=="Yes"){
    let target=event.currentTarget.id.charAt(0,1);
    let targetN=parseInt(event.currentTarget.id.charAt(1,2),10);
    if(document.getElementById(target+(targetN+1)).getAttribute("data")=="unoccupied"){
    possibleMoves.unshift(target+(targetN+1));
    }
    possibleMoves.unshift(event.currentTarget.id);
    for(let i=1;i<possibleMoves.length;i++){
    document.getElementById(possibleMoves[i]).setAttribute("data","unoccupied");
    tilesPath(document.getElementById(possibleMoves[i]));
    document.getElementById(possibleMoves[i]).setAttribute("onclick","movePawn(event)");
    }
}
if(canCapture=="No"){
///SINGEL TILE MOVE FOR A PAWN
if(event.currentTarget.getAttribute("data-pawn")=="1"){
    if(document.getElementById(targetId+(targetNum+1)).getAttribute("data")=="occupiedB"){
        return;
    }
    if(document.getElementById(targetId+(targetNum+1)).getAttribute("data")=="occupiedW"){
        return;
    }
        for(let i=targetNum;i<targetNum+2;i++){
        possibleMoves.push(targetId+i);
        }
        for(let i=0;i<possibleMoves.length;i++){
            document.getElementById(possibleMoves[i]).setAttribute("data","occupiedW");
            tilesPath(document.getElementById(possibleMoves[i]));
            document.getElementById(possibleMoves[i]).setAttribute("onclick","movePawn(event)");
    }
        document.getElementById(possibleMoves[0]).setAttribute("onclick","whitePawnMove(event)");
}
//FIRST TWO TILE MOVE OF A PAWN
else{
    if(document.getElementById(targetId+(targetNum+1)).getAttribute("data")=="occupiedB" || document.getElementById(targetId+(targetNum+1)).getAttribute("data")=="occupiedW"){
        return;
    }
    if(document.getElementById(targetId+(targetNum+2)).getAttribute("data")=="occupiedW" || document.getElementById(targetId+(targetNum+2)).getAttribute("data")=="occupiedB"){
        event.currentTarget.setAttribute("data-pawn","1");
        return;
    }
for(let i=targetNum;i<targetNum+3;i++){
possibleMoves.push(targetId+i);
}
for(let i=0;i<possibleMoves.length;i++){
    document.getElementById(possibleMoves[i]).getAttribute("onclick");
    document.getElementById(possibleMoves[i]).setAttribute("data","occupied");
    tilesPath(document.getElementById(possibleMoves[i]));
    document.getElementById(possibleMoves[i]).setAttribute("onclick","movePawn(event)");
}
document.getElementById(possibleMoves[0]).setAttribute("onclick","whitePawnMove(event)");
}
}
}
function blackPawnMove(event){
    if(PLAYER=="WHITE"){
        return;
    }
    updateTiles();
    pieceColor="black";
    movedPiece=event.currentTarget.id;
    let targetId=event.currentTarget.id.charAt(0,1);
    let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);
    let canCapture="No";

    pawnTake(event.currentTarget,targetNum);
    
    function pawnTake(target,num){ 
            let capture=[];
            tileTakeOne=letters[letters.indexOf(target.id.charAt(0,1))-1]+(num-1);
            tileTakeTwo=letters[letters.indexOf(target.id.charAt(0,1))+1]+(num-1);
            if(typeof tileTakeOne=="string"){
                capture.push(tileTakeOne);
            }
            if(typeof tileTakeTwo=="string"){
                capture.push(tileTakeTwo);
            }
            for(let i=0;i<capture.length;i++){
                if(document.getElementById(capture[i]).getAttribute("data")=="occupiedW"){
                let child=document.getElementById(capture[i]).lastChild;
            for(let j=0;j<whitePiecesAll.length;j++){
            if(child.getAttribute("src")==whitePiecesAll[j].img){
                possibleMoves.push(capture[i]);
            }
            }
        }
        }
        if(possibleMoves.length>0){
            canCapture="Yes";
        }    
        else{
            possibleMoves=[];
            canCapture="No";
        }
    }
    possibleMoves.unshift(event.currentTarget.id);
    if(canCapture=="Yes"){
        let target=event.currentTarget.id.charAt(0,1);
        let targetN=parseInt(event.currentTarget.id.charAt(1,2),10);
        if(document.getElementById(target+(targetN-1)).getAttribute("data")=="unoccupied"){
        possibleMoves.unshift(target+(targetN-1));
        }
        possibleMoves.unshift(event.currentTarget.id);
        for(let i=1;i<possibleMoves.length;i++){
        document.getElementById(possibleMoves[i]).setAttribute("data","unoccupied");
        tilesPath(document.getElementById(possibleMoves[i]));
        document.getElementById(possibleMoves[i]).setAttribute("onclick","movePawn(event)");
        }
    }
    if(canCapture=="No"){
    ///SINGEL TILE MOVE FOR A PAWN
    if(event.currentTarget.getAttribute("data-pawn")=="1"){
        if(document.getElementById(targetId+(targetNum-1)).getAttribute("data")=="occupiedB"){
            return;
        }
        if(document.getElementById(targetId+(targetNum-1)).getAttribute("data")=="occupiedW"){
            return;
        }
            for(let i=targetNum;i>targetNum-2;i--){
            possibleMoves.push(targetId+i);
            }
            for(let i=0;i<possibleMoves.length;i++){
                document.getElementById(possibleMoves[i]).setAttribute("data","occupiedB");
                tilesPath(document.getElementById(possibleMoves[i]));
                document.getElementById(possibleMoves[i]).setAttribute("onclick","movePawn(event)");
        }
            document.getElementById(possibleMoves[0]).setAttribute("onclick","blackPawnMove(event)");
    }
    //FIRST TWO TILE MOVE OF A PAWN
    else{
        if(document.getElementById(targetId+(targetNum-1)).getAttribute("data")=="occupiedW" || document.getElementById(targetId+(targetNum-1)).getAttribute("data")=="occupiedB"){
            return;
        }
        if(document.getElementById(targetId+(targetNum-2)).getAttribute("data")=="occupiedB" || document.getElementById(targetId+(targetNum-2)).getAttribute("data")=="occupiedW"){
            event.currentTarget.setAttribute("data-pawn","1");
            return;
        }
    for(let i=targetNum;i>targetNum-3;i--){
    possibleMoves.push(targetId+i);
    }
    for(let i=0;i<possibleMoves.length;i++){
        document.getElementById(possibleMoves[i]).getAttribute("onclick");
        document.getElementById(possibleMoves[i]).setAttribute("data","occupiedB");
        tilesPath(document.getElementById(possibleMoves[i]));
        document.getElementById(possibleMoves[i]).setAttribute("onclick","movePawn(event)");
    }
    document.getElementById(possibleMoves[0]).setAttribute("onclick","blackPawnMove(event)");
    }
    }
}
function movePawn(event){
    if(event.currentTarget.id==possibleMoves[0]){
        updateTiles();
    }
    if(pieceColor=="white"){
        clearPIeces(event.currentTarget,movedPiece);
    let pawn=document.createElement("img");
    pawn.setAttribute("src",piecesPawns[1].img);
    event.currentTarget.appendChild(pawn);
    event.currentTarget.setAttribute("onclick","whitePawnMove(event)");
    event.currentTarget.setAttribute("data-pawn","1");
    PLAYER="BLACK";
    }
    else if([pieceColor=="black"]){
        clearPIeces(event.currentTarget,movedPiece);
        let pawn=document.createElement("img");
        pawn.setAttribute("src",piecesPawns[0].img);
        event.currentTarget.appendChild(pawn);
        event.currentTarget.setAttribute("onclick","blackPawnMove(event)");
        event.currentTarget.setAttribute("data-pawn","1");
        PLAYER="WHITE";
    }
    document.getElementById(possibleMoves[0]).innerHTML="";
    updateTiles();
}
//ROOKS SELECTION AND MOVEMENT
function blackRookMove(event){
    if(PLAYER=="WHITE"){
        return;
    }
    updateTiles();
    pieceColor="black";
    movedPiece=event.currentTarget.id;
    let targetId=event.currentTarget.id.charAt(0,1);
    let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);
        //NUMBER COLUMN
    for(let i=1;i<7;i++){
        let id=targetId+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
        }
    }
    for(let i=1;i<7;i++){
        let id=targetId+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
        }
    }
    //LETTER ROW
    for(let i=letters.indexOf(targetId)+1;i<letters.length;i++){
        let id=letters[i]+targetNum;
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
        }
    }
    for(let i=letters.indexOf(targetId)-1;i>=0;i--){
        let id=letters[i]+targetNum;
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
        }
    }
}
function whiteRookMove(event){
    if(PLAYER=="BLACK"){
        return;
    }
    updateTiles();
    movedPiece=event.currentTarget.id;
    pieceColor="white";
    let targetId=event.currentTarget.id.charAt(0,1);
    let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);
    for(let i=1;i<7;i++){
        let id=targetId+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
        }
    }
    for(let i=1;i<7;i++){
        let id=targetId+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
        }
    }
    //LETTER ROW
        for(let i=letters.indexOf(targetId)+1;i<letters.length;i++){
        let id=letters[i]+targetNum;
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
        }
    }
    for(let i=letters.indexOf(targetId)-1;i>=0;i--){
        let id=letters[i]+targetNum;
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveRook(event)"); 
        }
    }
}
function moveRook(event){
if(pieceColor=="black"){
clearPIeces(event.currentTarget,movedPiece);
let piece=document.createElement("img");
piece.setAttribute("src",piecesBlackArr[0].img);
event.currentTarget.appendChild(piece);
event.currentTarget.setAttribute("onclick","blackRookMove(event)");
PLAYER="WHITE";
pieceColor="white";
}
else if(pieceColor=="white"){
clearPIeces(event.currentTarget,movedPiece);
let piece=document.createElement("img");
piece.setAttribute("src",piecesWhiteArr[0].img);
event.currentTarget.appendChild(piece);
event.currentTarget.setAttribute("onclick","whiteRookMove(event)");
PLAYER="BLACK";
pieceColor="black";
}
updateTiles();
}
//SELECTING THE KNIGHTS
function whiteKnightMove(event){
movedPiece=event.currentTarget;
if(PLAYER=="BLACK"){
    return;
}
updateTiles();
movedPiece=event.currentTarget.id;
pieceColor="white";
let targetId=event.currentTarget.id.charAt(0,1);
let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);
id=letters[letters.indexOf(targetId)+1]+(targetNum+2);
idCheck(id);
id=letters[letters.indexOf(targetId)+1]+(targetNum-2);
idCheck(id);
id=letters[letters.indexOf(targetId)-1]+(targetNum+2);
idCheck(id);
id=letters[letters.indexOf(targetId)-1]+(targetNum-2);
idCheck(id);
id=letters[letters.indexOf(targetId)+2]+(targetNum+1);
idCheck(id);
id=letters[letters.indexOf(targetId)+2]+(targetNum-1);
idCheck(id);
id=letters[letters.indexOf(targetId)-2]+(targetNum+1);
idCheck(id);
id=letters[letters.indexOf(targetId)-2]+(targetNum-1);
idCheck(id);
}
function blackKnightMove(event){
    movedPiece=event.currentTarget;
    if(PLAYER=="WHITE"){
        return;
    }
    updateTiles();
    movedPiece=event.currentTarget.id;
    pieceColor="black";
    let targetId=event.currentTarget.id.charAt(0,1);
    let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);
    id=letters[letters.indexOf(targetId)+1]+(targetNum+2);
    idCheck1(id);
    id=letters[letters.indexOf(targetId)+1]+(targetNum-2);
    idCheck1(id);
    id=letters[letters.indexOf(targetId)-1]+(targetNum+2);
    idCheck1(id);
    id=letters[letters.indexOf(targetId)-1]+(targetNum-2);
    idCheck1(id);
    id=letters[letters.indexOf(targetId)+2]+(targetNum+1);
    idCheck1(id);
    id=letters[letters.indexOf(targetId)+2]+(targetNum-1);
    idCheck1(id);
    id=letters[letters.indexOf(targetId)-2]+(targetNum+1);
    idCheck1(id);
    id=letters[letters.indexOf(targetId)-2]+(targetNum-1);
    idCheck1(id);
}
//CHECK THE POSSIBLE TILES FOR KNIGHT MOVEMENT
function idCheck(id){
    for(let i=0;i<1;i++){
    if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
        break;
    }
    else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
        tilesPath(document.getElementById(id));
        document.getElementById(id).setAttribute("onclick","moveKnight(event)"); 
    }
    else{
        tilesPath(document.getElementById(id));
        document.getElementById(id).setAttribute("onclick","moveKnight(event)"); 
    }
}
}
function idCheck1(id){
    for(let i=0;i<1;i++){
    if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
        break;
    }
    else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
        tilesPath(document.getElementById(id));
        document.getElementById(id).setAttribute("onclick","moveKnight(event)"); 
    }
    else{
        tilesPath(document.getElementById(id));
        document.getElementById(id).setAttribute("onclick","moveKnight(event)"); 
    }
}
}
//MOVING THE KNIGHTS
function moveKnight(event){
    if(pieceColor=="black"){
        clearPIeces(event.currentTarget,movedPiece);
        let piece=document.createElement("img");
        piece.setAttribute("src",piecesBlackArr[1].img);
        event.currentTarget.appendChild(piece);
        event.currentTarget.setAttribute("onclick","blackKnightMove(event)");
        PLAYER="WHITE";
        pieceColor="white";
        }
        else if(pieceColor=="white"){
        clearPIeces(event.currentTarget,movedPiece);
        let piece=document.createElement("img");
        piece.setAttribute("src",piecesWhiteArr[1].img);
        event.currentTarget.appendChild(piece);
        event.currentTarget.setAttribute("onclick","whiteKnightMove(event)");
        PLAYER="BLACK";
        pieceColor="black";
        }
        updateTiles();
}
//SELECTING THE BISHOPS
function whiteBishopMove(event) {
    movedPiece=event.currentTarget;
    if(PLAYER=="BLACK"){
        return;
    }
    updateTiles();
    movedPiece=event.currentTarget.id;
    pieceColor="white";
    let targetId=event.currentTarget.id.charAt(0,1);
    let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);
    for(let i=1;i<8;i++){
        let id=letters[letters.indexOf(targetId)+i]+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveBishop(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveBishop(event)"); 
        }
    }
    for(let i=1;i<8;i++){
             let id=letters[letters.indexOf(targetId)+i]+(targetNum-i);
             if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
                break;
            }
            else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
                tilesPath(document.getElementById(id));
                document.getElementById(id).setAttribute("onclick","moveBishop(event)");
                break;
            }
            else{
                tilesPath(document.getElementById(id));
                document.getElementById(id).setAttribute("onclick","moveBishop(event)"); 
            }
        }
    for(let i=1;i<8;i++){
                let id=letters[letters.indexOf(targetId)-i]+(targetNum+i);
                if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
                    break;
                }
                else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
                    tilesPath(document.getElementById(id));
                    document.getElementById(id).setAttribute("onclick","moveBishop(event)");
                    break;
                }
                else{
                    tilesPath(document.getElementById(id));
                    document.getElementById(id).setAttribute("onclick","moveBishop(event)"); 
                }
            }
    for(let i=1;i<8;i++){
        let id=letters[letters.indexOf(targetId)-i]+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveBishop(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveBishop(event)"); 
        }
    }
}
function blackBishopMove(event) {
    movedPiece=event.currentTarget;
    if(PLAYER=="WHITE"){
        return;
    }
    updateTiles();
    movedPiece=event.currentTarget.id;
    pieceColor="black";
    let targetId=event.currentTarget.id.charAt(0,1);
    let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);
    for(let i=1;i<8;i++){
        let id=letters[letters.indexOf(targetId)+i]+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveBishop(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveBishop(event)"); 
        }
    }
    for(let i=1;i<8;i++){
             let id=letters[letters.indexOf(targetId)+i]+(targetNum-i);
             if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
                break;
            }
            else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
                tilesPath(document.getElementById(id));
                document.getElementById(id).setAttribute("onclick","moveBishop(event)");
                break;
            }
            else{
                tilesPath(document.getElementById(id));
                document.getElementById(id).setAttribute("onclick","moveBishop(event)"); 
            }
        }
    for(let i=1;i<8;i++){
                let id=letters[letters.indexOf(targetId)-i]+(targetNum+i);
                if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
                    break;
                }
                else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
                    tilesPath(document.getElementById(id));
                    document.getElementById(id).setAttribute("onclick","moveBishop(event)");
                    break;
                }
                else{
                    tilesPath(document.getElementById(id));
                    document.getElementById(id).setAttribute("onclick","moveBishop(event)"); 
                }
            }
    for(let i=1;i<8;i++){
        let id=letters[letters.indexOf(targetId)-i]+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveBishop(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveBishop(event)"); 
        }
    }
}
//MOVING THE BISHOPS
function moveBishop(event){
    if(pieceColor=="black"){
    clearPIeces(event.currentTarget,movedPiece);
    let piece=document.createElement("img");
    piece.setAttribute("src",piecesBlackArr[2].img);
    event.currentTarget.appendChild(piece);
    event.currentTarget.setAttribute("onclick","blackBishopMove(event)");
    PLAYER="WHITE";
    pieceColor="white";
    }
    else if(pieceColor=="white"){
    clearPIeces(event.currentTarget,movedPiece);
    let piece=document.createElement("img");
    piece.setAttribute("src",piecesWhiteArr[2].img);
    event.currentTarget.appendChild(piece);
    event.currentTarget.setAttribute("onclick","whiteBishopMove(event)");
    PLAYER="BLACK";
    pieceColor="black";
    }
    updateTiles();
}
//SELECTING THE QUEENS
function whiteQueenMove(event) {
    movedPiece=event.currentTarget;
    if(PLAYER=="BLACK"){
        return;
    }
    updateTiles();
    movedPiece=event.currentTarget.id;
    pieceColor="white";
    let targetId=event.currentTarget.id.charAt(0,1);
    let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);
    for(let i=1;i<8;i++){
        let id=letters[letters.indexOf(targetId)+i]+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
    for(let i=1;i<8;i++){
             let id=letters[letters.indexOf(targetId)+i]+(targetNum-i);
             if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
                break;
            }
            else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
                tilesPath(document.getElementById(id));
                document.getElementById(id).setAttribute("onclick","moveQueen(event)");
                break;
            }
            else{
                tilesPath(document.getElementById(id));
                document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
            }
        }
    for(let i=1;i<8;i++){
                let id=letters[letters.indexOf(targetId)-i]+(targetNum+i);
                if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
                    break;
                }
                else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
                    tilesPath(document.getElementById(id));
                    document.getElementById(id).setAttribute("onclick","moveQueen(event)");
                    break;
                }
                else{
                    tilesPath(document.getElementById(id));
                    document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
                }
            }
    for(let i=1;i<8;i++){
        let id=letters[letters.indexOf(targetId)-i]+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
    for(let i=1;i<7;i++){
        let id=targetId+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
    for(let i=1;i<7;i++){
        let id=targetId+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
    //LETTER ROW
        for(let i=letters.indexOf(targetId)+1;i<letters.length;i++){
        let id=letters[i]+targetNum;
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
    for(let i=letters.indexOf(targetId)-1;i>=0;i--){
        let id=letters[i]+targetNum;
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
}
function blackQueenMove(event) {
    movedPiece=event.currentTarget;
    if(PLAYER=="WHITE"){
        return;
    }
    updateTiles();
    movedPiece=event.currentTarget.id;
    pieceColor="black";
    let targetId=event.currentTarget.id.charAt(0,1);
    let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);
    for(let i=1;i<8;i++){
        let id=letters[letters.indexOf(targetId)+i]+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
    for(let i=1;i<8;i++){
             let id=letters[letters.indexOf(targetId)+i]+(targetNum-i);
             if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
                break;
            }
            else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
                tilesPath(document.getElementById(id));
                document.getElementById(id).setAttribute("onclick","moveQueen(event)");
                break;
            }
            else{
                tilesPath(document.getElementById(id));
                document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
            }
        }
    for(let i=1;i<8;i++){
                let id=letters[letters.indexOf(targetId)-i]+(targetNum+i);
                if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
                    break;
                }
                else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
                    tilesPath(document.getElementById(id));
                    document.getElementById(id).setAttribute("onclick","moveQueen(event)");
                    break;
                }
                else{
                    tilesPath(document.getElementById(id));
                    document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
                }
            }
    for(let i=1;i<8;i++){
        let id=letters[letters.indexOf(targetId)-i]+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
    for(let i=1;i<7;i++){
        let id=targetId+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
    for(let i=1;i<7;i++){
        let id=targetId+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
    //LETTER ROW
        for(let i=letters.indexOf(targetId)+1;i<letters.length;i++){
        let id=letters[i]+targetNum;
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
    for(let i=letters.indexOf(targetId)-1;i>=0;i--){
        let id=letters[i]+targetNum;
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveQueen(event)"); 
        }
    }
    
}
//MOVING THE QUEENS
function moveQueen(event) {
    if(pieceColor=="black"){
        clearPIeces(event.currentTarget,movedPiece);
        let piece=document.createElement("img");
        piece.setAttribute("src",piecesBlackArr[3].img);
        event.currentTarget.appendChild(piece);
        event.currentTarget.setAttribute("onclick","blackQueenMove(event)");
        PLAYER="WHITE";
        pieceColor="white";
        }
        else if(pieceColor=="white"){
        clearPIeces(event.currentTarget,movedPiece);
        let piece=document.createElement("img");
        piece.setAttribute("src",piecesWhiteArr[3].img);
        event.currentTarget.appendChild(piece);
        event.currentTarget.setAttribute("onclick","whiteQueenMove(event)");
        PLAYER="BLACK";
        pieceColor="black";
        }
        updateTiles();
}
//SELECTING THE KINGS
function whiteKingMove(event) {
    movedPiece=event.currentTarget;
    if(PLAYER=="BLACK"){
        return;
    }
    updateTiles();
    movedPiece=event.currentTarget.id;
    pieceColor="white";
    let targetId=event.currentTarget.id.charAt(0,1);   //E
    let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);  //1
    if(event.currentTarget.id=="E1"){
        for(let i=5;i<7;i++){
            if(document.getElementById(letters[i]+1).getAttribute("data")=="occupiedW" || document.getElementById(letters[i]+1).getAttribute("data")=="occupiedB"){
                break;
            }
            else if(document.getElementById(letters[7]+1).getAttribute("onclick")=="whiteRookMove(event)"){
                tilesPath(document.getElementById(letters[6]+1));
                document.getElementById(letters[6]+1).setAttribute("onclick","castle(event)");
                break;
            }
        }
        for(let i=3;i>-1;i--){
            if(document.getElementById(letters[i]+1).getAttribute("data")=="occupiedW" || document.getElementById(letters[i]+1).getAttribute("data")=="occupiedB"){
                break;
            }
            else if(document.getElementById(letters[0]+1).getAttribute("onclick")=="whiteRookMove(event)"){
                tilesPath(document.getElementById(letters[1]+1));
                document.getElementById(letters[1]+1).setAttribute("onclick","castle(event)");
                break;
            }
        }
    }
    for(let i=1;i<2;i++) {
        let id=targetId+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=targetId+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)+1]+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)+1]+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)+1]+(targetNum);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)-1]+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)-1]+(targetNum);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)-1]+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedW"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedB"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
}
function blackKingMove(event){
    movedPiece=event.currentTarget;
    if(PLAYER=="WHITE"){
        return;
    }
    updateTiles();
    movedPiece=event.currentTarget.id;
    pieceColor="black";
    let targetId=event.currentTarget.id.charAt(0,1); 
    let targetNum=parseInt(event.currentTarget.id.charAt(1,2),10);
    if(event.currentTarget.id=="E8"){
        for(let i=5;i<7;i++){
            if(document.getElementById(letters[i]+8).getAttribute("data")=="occupiedW" || document.getElementById(letters[i]+8).getAttribute("data")=="occupiedB"){
                break;
            }
            else if(document.getElementById(letters[7]+8).getAttribute("onclick")=="blackRookMove(event)"){
                tilesPath(document.getElementById(letters[6]+8));
                document.getElementById(letters[6]+8).setAttribute("onclick","castle(event)");
                break;
            }
        }
        for(let i=3;i>-1;i--){
            if(document.getElementById(letters[i]+8).getAttribute("data")=="occupiedW" || document.getElementById(letters[i]+8).getAttribute("data")=="occupiedB"){
                break;
            }
            else if(document.getElementById(letters[0]+8).getAttribute("onclick")=="blackRookMove(event)"){
                tilesPath(document.getElementById(letters[1]+8));
                document.getElementById(letters[1]+8).setAttribute("onclick","castle(event)");
                break;
            }
        }
    }
    for(let i=1;i<2;i++) {
        let id=targetId+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=targetId+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)+1]+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)+1]+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)+1]+(targetNum);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)-1]+(targetNum+i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)-1]+(targetNum);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
    for(let i=1;i<2;i++) {
        let id=letters[letters.indexOf(targetId)-1]+(targetNum-i);
        if(document.getElementById(id)==null||document.getElementById(id).getAttribute("data")=="occupiedB"){
            break;
        }
        else if(document.getElementById(id).getAttribute("data")=="occupiedW"){
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)");
            break;
        }
        else{
            tilesPath(document.getElementById(id));
            document.getElementById(id).setAttribute("onclick","moveKing(event)"); 
        }
    }
}
//MOVING THE KINGS , CHECKING FOR CHECKS AND CASTLING
function moveKing(event){
    if(pieceColor=="black"){
        clearPIeces(event.currentTarget,movedPiece);
        let piece=document.createElement("img");
        piece.setAttribute("src",piecesBlackArr[4].img);
        event.currentTarget.appendChild(piece);
        event.currentTarget.setAttribute("onclick","blackKingMove(event)");
        // event.currentTarget.setAttribute("data-king","black");
        PLAYER="WHITE";
        pieceColor="white";
        }
        else if(pieceColor=="white"){
        clearPIeces(event.currentTarget,movedPiece);
        let piece=document.createElement("img");
        piece.setAttribute("src",piecesWhiteArr[4].img);
        event.currentTarget.appendChild(piece);
        event.currentTarget.setAttribute("onclick","whiteKingMove(event)");
        PLAYER="BLACK";
        pieceColor="black";
        }
        updateTiles();
}
function checkKing(){
    if(PLAYER=="BLACK"){
        let target=document.querySelector(`[data-king="king-black"]`).id.charAt(0,1);
        let Num=parseInt(document.querySelector(`[data-king="king-black"]`).id.charAt(1,2),10);
        isCheck(target,Num,"white","black");
        pieceColor="black";
    }
    else if(PLAYER=="WHITE"){
        let target=document.querySelector(`[data-king="king-white"]`).id.charAt(0,1);
        let Num=parseInt(document.querySelector(`[data-king="king-white"]`).id.charAt(1,2),10);
        isCheck(target,Num,"black","white");
        pieceColor="white";
    }
    function isCheck(targetId,targetNum,type,other){
            let Break=false;
    //QUEEN OR BISHOP CHECK
    for(let i=1;i<8;i++){
        //DIFFRENT TILE IDS CONCERNING THE KING
        let id=letters[letters.indexOf(targetId)+i]+(targetNum+i);
        //POSSIBLE TILE FOR CHECK
        let tile=document.getElementById(id);
        if(tile!==null){
            for(let m=0;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==other+moveArr[m].name){
                Break=true;
                break;
            }
        }
        for(let m=2;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==type+moveArr[m].name){
                Break=true;
                break;
            }
        }
        if(Break==false){
            if(tile.getAttribute("onclick")==type+moveArr[0].name||tile.getAttribute("onclick")==type+moveArr[1].name){
                document.getElementById(targetId+targetNum).style.backgroundColor="red";
            }
        }
        }
    }
    Break=false;
    for(let i=1;i<8;i++){
             let id=letters[letters.indexOf(targetId)+i]+(targetNum-i);
             let tile=document.getElementById(id);
             if(tile!==null){
                 for(let m=0;m<moveArr.length;m++){
                 if(tile.getAttribute("onclick")==other+moveArr[m].name){
                     Break=true;
                     break;
                 }
             }
             for(let m=2;m<moveArr.length;m++){
                 if(tile.getAttribute("onclick")==type+moveArr[m].name){
                     Break=true;
                     break;
                 }
             }
             if(Break==false){
                 if(tile.getAttribute("onclick")==type+moveArr[0].name||tile.getAttribute("onclick")==type+moveArr[1].name){
                     document.getElementById(targetId+targetNum).style.backgroundColor="red";
                 }
             }
             }
        }
    Break=false;
    for(let i=1;i<8;i++){
                let id=letters[letters.indexOf(targetId)-i]+(targetNum+i);
                let tile=document.getElementById(id);
                if(tile!==null){
                    for(let m=0;m<moveArr.length;m++){
                    if(tile.getAttribute("onclick")==other+moveArr[m].name){
                        Break=true;
                        break;
                    }
                }
                for(let m=2;m<moveArr.length;m++){
                    if(tile.getAttribute("onclick")==type+moveArr[m].name){
                        Break=true;
                        break;
                    }
                }
                if(Break==false){
                    if(tile.getAttribute("onclick")==type+moveArr[0].name||tile.getAttribute("onclick")==type+moveArr[1].name){
                        document.getElementById(targetId+targetNum).style.backgroundColor="red";
                    }
                }
                }
            }
    Break=false;
    for(let i=1;i<8;i++){
        let id=letters[letters.indexOf(targetId)-i]+(targetNum-i);
        let tile=document.getElementById(id);
        if(tile!==null){
            for(let m=0;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==other+moveArr[m].name){
                Break=true;
                break;
            }
        }
        for(let m=2;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==type+moveArr[m].name){
                Break=true;
                break;
            }
        }
        if(Break==false){
            if(tile.getAttribute("onclick")==type+moveArr[0].name||tile.getAttribute("onclick")==type+moveArr[1].name){
                document.getElementById(targetId+targetNum).style.backgroundColor="red";
            }
        }
        }
    }
    Break=false;
    // QUEEN OR ROOK CHECK
    for(let i=1;i<7;i++){
        let id=targetId+(targetNum-i);
        let tile=document.getElementById(id);
        if(tile!==null){
            for(let m=0;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==other+moveArr[m].name){
                Break=true;
                break;
            }
        }
        for(let m=3;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==type+moveArr[m].name){
                Break=true;
                break;
            }
        }
        if(tile.getAttribute("onclick")==type+moveArr[1].name){
            Break=true;
            break;
        }
        if(Break==false){
            if(tile.getAttribute("onclick")==type+moveArr[2].name||tile.getAttribute("onclick")==type+moveArr[0].name){
                document.getElementById(targetId+targetNum).style.backgroundColor="red";
            }
        }
        }
    }
    Break=false;
    for(let i=1;i<7;i++){
        let id=targetId+(targetNum+i);
        let tile=document.getElementById(id);
        if(tile!==null){
            for(let m=0;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==other+moveArr[m].name){
                Break=true;
                break;
            }
        }
        for(let m=3;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==type+moveArr[m].name){
                Break=true;
                break;
            }
        }
        if(tile.getAttribute("onclick")==type+moveArr[1].name){
            Break=true;
            break;
        }
        if(Break==false){
            if(tile.getAttribute("onclick")==type+moveArr[2].name||tile.getAttribute("onclick")==type+moveArr[0].name){
                document.getElementById(targetId+targetNum).style.backgroundColor="red";
            }
        }
        }
    }
    Break=false;
    for(let i=letters.indexOf(targetId)+1;i<letters.length;i++){
        let id=letters[i]+targetNum;
        let tile=document.getElementById(id);
        if(tile!==null){
            for(let m=0;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==other+moveArr[m].name){
                Break=true;
                break;
            }
        }
        for(let m=3;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==type+moveArr[m].name){
                Break=true;
                break;
            }
        }
        if(tile.getAttribute("onclick")==type+moveArr[1].name){
            Break=true;
            break;
        }
        if(Break==false){
            if(tile.getAttribute("onclick")==type+moveArr[2].name||tile.getAttribute("onclick")==type+moveArr[0].name){
                document.getElementById(targetId+targetNum).style.backgroundColor="red";
            }
        }
        }
    }
    Break=false;
    for(let i=letters.indexOf(targetId)-1;i>=0;i--){
        let id=letters[i]+targetNum;
        let tile=document.getElementById(id);
        if(tile!==null){
            for(let m=0;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==other+moveArr[m].name){
                Break=true;
                break;
            }
        }
        for(let m=3;m<moveArr.length;m++){
            if(tile.getAttribute("onclick")==type+moveArr[m].name){
                Break=true;
                break;
            }
        }
        if(tile.getAttribute("onclick")==type+moveArr[1].name){
            Break=true;
            break;
        }
        if(Break==false){
            if(tile.getAttribute("onclick")==type+moveArr[2].name||tile.getAttribute("onclick")==type+moveArr[0].name){
                document.getElementById(targetId+targetNum).style.backgroundColor="red";
            }
        }
        }
    }
    Break=false;
    //CHECK BY KNIGHT
    let id=letters[letters.indexOf(targetId)+1]+(targetNum+2);
    checkByKnight(id);
    id=letters[letters.indexOf(targetId)+1]+(targetNum-2);
    checkByKnight(id);
    id=letters[letters.indexOf(targetId)-1]+(targetNum+2);
    checkByKnight(id);
    id=letters[letters.indexOf(targetId)-1]+(targetNum-2);
    checkByKnight(id);
    id=letters[letters.indexOf(targetId)+2]+(targetNum+1);
    checkByKnight(id);
    id=letters[letters.indexOf(targetId)+2]+(targetNum-1);  
    checkByKnight(id);
    id=letters[letters.indexOf(targetId)-2]+(targetNum+1);
    checkByKnight(id);
    id=letters[letters.indexOf(targetId)-2]+(targetNum-1);
    checkByKnight(id);
    function checkByKnight(id){
        for(let i=0;i<1;i++){
            if(document.getElementById(id)!==null){
                if(document.getElementById(id).getAttribute("onclick")!==type+"KnightMove(event)"){
                    break;
                }
                if(document.getElementById(id).getAttribute("onclick")==type+"KnightMove(event)"){
                    document.getElementById(targetId+targetNum).style.backgroundColor="red";
                }
            }
    }
    }
    //CHECK FOR PAWN CHECK
    id=letters[letters.indexOf(targetId)+1]+(targetNum+1)
    checkByPawn(id);
    id=letters[letters.indexOf(targetId)+1]+(targetNum-1)
    checkByPawn(id);
    function checkByPawn(id){
        if(document.getElementById(id)!==null){
            if(document.getElementById(id).getAttribute("onclick")==type+"PawnMove(event)"){
                document.getElementById(targetId+targetNum).style.backgroundColor="red";
            }
    };
}
}
}
function castle(event){
    console.log("Castle white");
    let kingPiece=document.createElement("img");
    let rookPiece=document.createElement("img");
    if(pieceColor=="white"){
        kingPiece.setAttribute("src",startingPieces[4].img);
        rookPiece.setAttribute("src",startingPieces[0].img);
        if(event.currentTarget.id==(letters[6]+1) && document.getElementById(letters[7]+1).getAttribute("onclick")==pieceColor+"RookMove(event)"){
            newRook=document.getElementById(letters[5]+1);
            newRook.appendChild(rookPiece);
            let rookRemove=document.getElementById(letters[7]+1).lastChild;
            document.getElementById(letters[7]+1).removeChild(rookRemove);
        }
        else if(event.currentTarget.id==(letters[1]+1) && document.getElementById(letters[0]+1).getAttribute("onclick")==pieceColor+"RookMove(event)"){
            newRook=document.getElementById(letters[2]+1);
            newRook.appendChild(rookPiece);
            let rookRemove=document.getElementById(letters[0]+1).lastChild;
            document.getElementById(letters[0]+1).removeChild(rookRemove);
        }
        let kingRemove=document.getElementById(letters[4]+1).lastChild;
        document.getElementById(letters[4]+1).removeChild(kingRemove);
        document.getElementById(letters[4]+1).removeAttribute("data-king");
        event.currentTarget.appendChild(kingPiece);
        PLAYER="BLACK";
        pieceColor="black";
    }
    else if(pieceColor=="black"){
        console.log("Black castle");
        kingPiece.setAttribute("src",startingPieces[10].img);
        rookPiece.setAttribute("src",startingPieces[6].img);
        if(event.currentTarget.id==(letters[6]+8) && document.getElementById(letters[7]+8).getAttribute("onclick")==pieceColor+"RookMove(event)"){
            newRook=document.getElementById(letters[5]+8);
            newRook.appendChild(rookPiece);
            let rookRemove=document.getElementById(letters[7]+8).lastChild;
            document.getElementById(letters[7]+8).removeChild(rookRemove);
        }
        else if(event.currentTarget.id==(letters[1]+8) && document.getElementById(letters[0]+8).getAttribute("onclick")==pieceColor+"RookMove(event)"){
            newRook=document.getElementById(letters[2]+8)
            newRook.appendChild(rookPiece);
            let rookRemove=document.getElementById(letters[0]+8).lastChild;
            document.getElementById(letters[0]+8).removeChild(rookRemove);
        }
        let kingRemove=document.getElementById(letters[4]+8).lastChild;
        document.getElementById(letters[4]+8).removeChild(kingRemove);
        document.getElementById(letters[4]+8).removeAttribute("data-king");
        event.currentTarget.appendChild(kingPiece);
        PLAYER="WHITE";
        pieceColor="white";
    }
    updateTiles();
}