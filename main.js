
//When nav item is clicked show corresponding div while hiding non-corresponding divs

$(".nav-projects").on("click", function() {
	$(".about").hide();
	$(".projects").show("slow");
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

