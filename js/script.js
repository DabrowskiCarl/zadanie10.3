/*
$(function(){
    const carouselList = $("#carousel ul");
    const c = setInterval(function(){
		carouselList.animate({marginLeft:-600},4000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},5000);
});
*/

$(function(){
	var carouselList = $('#carousel ul');
	setInterval(changeSlide, 5000);
	function changeSlide(){
		carouselList.animate({'marginLeft':-600}, 600, moveFirstSlide);
	}
	function moveFirstSlide(){
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}


	

	



});