// JavaScript Document
function animateIt()
{
var tl = new TimelineMax();
	tl
	//Frame1
	.set(empty,{alpha:0})
	.from(text1,.5,{alpha:0, y:20, ease: Power2.easeOut})
	.to(text1,.5,{alpha:0, y:-20, ease: Power2.easeIn},"+=1.5")
	
	//Frame2
	.set(hand,{alpha:1})
	.from(text2,.5,{alpha:0, y:20, ease: Power2.easeOut})
	.from(paper,1.5,{alpha:0, y:-10, scaleY:.1, ease: Power3.easeOut},"+=.5")
	.to(text2,.5,{alpha:0, y:-20, ease: Power2.easeIn},"+=1.5")
	
	//Frame3
	.from(text3,.5,{alpha:0, y:20, ease: Power2.easeOut})
	.to(hand,.5,{alpha:0, y:90, ease: Power2.easeIn},"+=1.5")
	.to(text3,.5,{alpha:0, y:-20, ease: Power2.easeIn},"+=.2")
	
	//Frame4
	.from(text4,.5,{alpha:0, y:20, ease: Power2.easeOut})
	.from(phone,.5,{alpha:0, y:20, ease: Power2.easeOut},"+=.3")
	.from(cta,.5,{alpha:0, ease: Power2.easeOut},"+=.3")
	.from(details,.5,{zIndex:-10, alpha:0})
	.from(LogoBBY,.5,{alpha:0, ease: Power2.easeOut},"+=.1")
}

function showDetails()
{
	var tl1 = new TimelineMax();
	tl1
	.to(legal,.5,{top:0})
}

function hideDetails()
{
	var tl1 = new TimelineMax();
	tl1
	.to(legal,.5,{top:-90})
}