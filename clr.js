var numsq = 6;
var color = generateRandomClr(numsq);
var square = document.querySelectorAll(".square");
var pickclr = pickcolor();
var clrdisp = document.getElementById("clrdisp");
var msgdisp = document.querySelector("#msgdisp");
var h1 = document.querySelector("h1");
var bef = document.getElementById("bef");
var easybtn = document.getElementById("easy");
var hardbtn = document.getElementById("hard");

  clrdisp.textContent = pickclr;

easybtn.addEventListener("click",function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsq = 3;
    color = generateRandomClr(numsq);
    pickclr = pickcolor();
    clrdisp.textContent = pickclr;
    for(i=0;i<square.length;i++){
    	if(color[i])  {square[i].style.backgroundColor = color[i];}
    	else   {square[i].style.display = "none";}
    }
    h1.style.backgroundColor = "steelblue";
});


hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numsq = 6;
    color = generateRandomClr(numsq);
    pickclr = pickcolor();
    clrdisp.textContent = pickclr;
    for (var i = 0; i < square.length; i++) {
      square[i].style.backgroundColor = color[i];
    square[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
});

bef.addEventListener("click",function(){
       color = generateRandomClr(numsq);
       pickclr = pickcolor();
       clrdisp.textContent = pickclr;
       msgdisp.textContent = "";
       for (var i = 0; i < square.length; i++){
	square[i].style.backgroundColor = color[i];}
	h1.style.backgroundColor = "steelblue";
	bef.textContent = "New Colors";
});

for (var i = 0; i < square.length; i++){
	square[i].style.backgroundColor = color[i]; 
	square[i].addEventListener("click",function(){
		var clickclr = this.style.backgroundColor;
		if (clickclr === pickclr) 
		{   msgdisp.textContent = "Correct!!";
	        changeclr(clickclr);
	        h1.style.backgroundColor = clickclr;
	        msgdisp.style.color = "black";
	        bef.textContent = "Play Again?" }
        else
        {   this.style.backgroundColor = "#232323";
            msgdisp.textContent = "Try Again";}
	});
}


function changeclr(clr){
	for(var i = 0; i < square.length; i++)
            {   
            	square[i].style.backgroundColor = clr;
            }
}
function pickcolor() {
	var rdm = Math.floor(Math.random() * color.length);
	return color[rdm];
}
function generateRandomClr(num) {
	var arr = [];
	for (var i = 0; i < num; i++) 
		{   arr.push(randomClr());   }
	return arr;
}
function randomClr() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}