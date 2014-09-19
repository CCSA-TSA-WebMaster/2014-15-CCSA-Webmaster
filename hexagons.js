//hexagons.js

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

var maxX = Math.floor(winWidth/120) - 1;
var hexNum = 0;

function Hexagon(color){
    var hexagon = document.createElement("div");
    hexagon.className = "hexagonShell" + color;
    
    if(hexNum < maxX){
        if(hexNum % 2 == 0){
            hexagon.setAttribute("style","top: 0px; left: " + (120 * hexNum) + "px;");
        }else{
            hexagon.setAttribute("style","top: 70px; left: " + (120 * hexNum) + "px;");
        }
    }else{
        if((hexNum % maxX) % 2 == 0){
            hexagon.setAttribute("style","top: " + ((Math.floor(hexNum/maxX)) * 138) + "px; left: " + (120 * (hexNum % maxX)) + "px;" ); 
        }else{
            hexagon.setAttribute("style","top: " + (((Math.floor(hexNum/maxX)) * 138)+70) + "px; left: " + (120 * (hexNum % maxX)) + "px;" ); 
        }
    }
    
    var partOne = document.createElement("span");
    partOne.className = "triOne";
    hexagon.appendChild(partOne);
    
    var partTwo = document.createElement("span");
    partTwo.className = "triTwo";
    hexagon.appendChild(partTwo);
    
    var partThree = document.createElement("span");
    partThree.className = "triThree";
    hexagon.appendChild(partThree);
    
    var partFour = document.createElement("span");
    partFour.className = "triFour";
    hexagon.appendChild(partFour);
    
    var partFive = document.createElement("span");
    partFive.className = "triFive";
    hexagon.appendChild(partFive);
    
    var partSix = document.createElement("span");
    partSix.className = "triSix";
    hexagon.appendChild(partSix);
    
    document.body.appendChild(hexagon);
    
    hexNum++;
}

for(var i = 0;i<1001;i++){
    var ranNum = Math.floor(Math.random()*3);
    var color;
    
    switch(ranNum){
        case 0:
            color = "O";
            break;
        case 1:
            color = "P";
            break;
        case 2:
            color = "G";
            break;
    }
    
    var John = new Hexagon(color);  
}