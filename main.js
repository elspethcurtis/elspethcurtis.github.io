
//When nav item is clicked show corresponding div while hiding non-corresponding divs

$(".nav-projects").on("click", function() {
	$(".projects").show("slow");
	$(".about").hide();
	$(".contact").hide();
})

$(".nav-contact").on("click", function() {
	$(".about").hide();
	$(".projects").hide();
	$(".contact").show("slow");
})


//when project button is clicked expand project details
$('.project-1-btn').click(function () {
	$(".project-1").toggle("slow");
})

$('.project-2-btn').click(function () {
	$(".project-2").toggle("slow");
})

$('.project-3-btn').click(function () {
	$(".project-3").toggle("slow");
})

$('.project-4-btn').click(function () {
	$(".project-4").toggle("slow");
})
$('.project-5-btn').click(function () {
	$(".project-5").toggle("slow");
})
$('.project-6-btn').click(function () {
	$(".project-6").toggle("slow");
})
$('.project-7-btn').click(function () {
	$(".project-7").toggle("slow");
})
