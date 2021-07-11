function transitionFunction(){

const transitionContainer = document.querySelector(".transition-container");
const strips = document.querySelector(".strip");

gsap.set(".content", {visibility: "hidden"});

const transition1 = gsap.from(transitionContainer, 2.2, {
	y: "100%",
	autoAlpha: 0,
	delay: 0,
	paused: true,
	ease: Power4.easeInOut
});

const transition2 = gsap.to(transitionContainer, 1.2, {
	y: "-100%",
	delay: 3.5,
	paused: true,
	ease: Power4.easeInOut,
	onComplete: TweenLite.delayedCall(4.5, newPage)
});

const strip = gsap.from(".strip", 2.2, {
	y: "200",
	autoAlpha: 0,
	delay: 1.2,
	stagger: 0.2,
	paused: true,
	ease: Power4.easeInOut
});

transition1.play();
strip.play();
transition2.play();

}

$(".content").find("a").click(transitionFunction);


function newPage(){
	window.location.href = "profile.html";
}
