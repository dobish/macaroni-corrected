// JavaScript Document
function addProduct(){
	location.href = "search.php";
}
$(".button--ok").click(function(){
	addProduct();
});



$('.button--cancel').click(function(){
	$(".conditionalOpen, .conditionalClose").toggleClass("conditionalOpen conditionalClose")
});

