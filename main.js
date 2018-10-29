/*Start Main Elements -----------------------------------------------------------------------*/
let cookie = document.getElementById("cookie")
let counter = document.getElementById("counter")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
let p5 = document.getElementById("p5")
let p6 = document.getElementById("p6")
let p8 = document.getElementById("p8")
var a;
let firework = document.getElementById("firework")
let gameover = document.getElementById("gameover")


/*Start Clicker -----------------------------------------------------------------------------*/
let points = 20;

function shrink(){
	a = window.setInterval(function(){
	cookie.setAttribute("style", "width: "+(100+points)+"px;" );
	}, 100);
}

function stopshrink(){
	clearInterval(a);
}

let clicker = function(grow) {
	cookie.setAttribute("style", "width: "+(100+points)+"px;" );

	if (points > 200) {
		points = points + 4;
	} 
	
	if(points > 400) {
		points =points + 8;
	}
	
	else {
		points = points + 2;
	}
	
  	counter.innerHTML = points;
	
/*Start Show Unicorns -----------------------------------------------------------------------------*/
	if (points >= 30){
		p1.classList.remove("hidden");
	}
	
	setInterval(function(){
		if(points < 30){
		p1.classList.add("hidden");
	}
	},100);
	
	if (points >= 60){
		p2.classList.remove("hidden");
	}
	
	setInterval(function(){
		if(points < 60){
		p2.classList.add("hidden");
	}
	},100);
	
	if (points >= 90){
		p3.classList.remove("hidden");
	}
	
	setInterval(function(){
		if(points < 90){
		p3.classList.add("hidden");
	}
	},100);
	
	if (points >= 120){
		p4.classList.remove("hidden");
	}
	
	setInterval(function(){
		if(points < 120){
		p4.classList.add("hidden");
	}
	},100);
	
	if (points >= 150){
		p5.classList.remove("hidden");
	}
	
	setInterval(function(){
		if(points < 150){
		p5.classList.add("hidden");
	}
	},100);
	
	if (points >= 180){
		p6.classList.remove("hidden");
	}
	
	setInterval(function(){
		if(points < 180){
		p6.classList.add("hidden");
	}
	},100);
	
	if (points >= 210){
		p8.classList.remove("hidden");
	}
	
	setInterval(function(){
		if(points < 210){
		p8.classList.add("hidden");
	}
	},100);

	
/*Start Overlay Firework -----------------------------------------------------------------------------*/
	if (points >= 300){
			firework.classList.remove("hidden");
		}

}

cookie.addEventListener("click", clicker);
cookie.addEventListener("mouseup", shrink);
cookie.addEventListener("mousedown", stopshrink);


/*Start Interval -------------------------------------------------------------------------------------*/
window.setInterval(function(showpoints){
	points = points - 2;
	counter.innerHTML = points;

/*Start Overlay Gameover -----------------------------------------------------------------------------*/
    if(points <= 0){
	  gameover.classList.remove("hidden");
	}
}, 900);








