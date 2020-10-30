
//When nav item is clicked show corresponding div while hiding non-corresponding divs
$(".nav-about").on("click", function() {
	$(".about").show("slow");
	$(".projects").hide();
	$(".contact").hide();
})

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

