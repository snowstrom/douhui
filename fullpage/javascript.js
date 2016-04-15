/**
 * Created by Administrator on 2016/04/08.
 */
$(document).ready(function () {
    $(".section1 img").fadeOut(0);
    $(".section2 img").slideUp(0);
    $(".section1 img").fadeIn(2000);
    $("#container").fullpage({
        continuousVertical:true,
        navigation:true,
        slidesNavigation:true,
        controlArrowColor:"blue",

        afterLoad: function (anchorLink,index) {
            $("p").delay(500).addClass("animated rotateIn");
            setTimeout(function(){
                $("p").removeClass("animated rotateIn");
            },1000);
            if(index==1){
                $(".section1 img").fadeIn(2000);
            }
            if(index==2){
                $(".section2 img").slideDown(1500);
            }
            if(index == 3){
                $(".section3 img").delay(500).addClass("animated shake");
                setTimeout(function () {
                    $(".section3 img").removeClass("animated shake");
                },1000);
            }
            if(index == 4){
                $(".section4 img").delay(500).addClass("animated fadeInLeft");
                setTimeout(function () {
                    $(".section4 img").removeClass("animated fadeInLeft");
                },1000);
            }
            if(index == 5){
                $(".section5 img").delay(500).addClass("animated rotateOut");
                setTimeout(function () {
                    $(".section5 img").removeClass("animated rotateOut");
                },1000);
            }
            if(index == 6){
                $(".section6 img").delay(500).addClass("animated flip");
                setTimeout(function () {
                    $(".section6 img").removeClass("animated flip");
                },1000);
            }
            if(index == 7){
                $(".section7 img").delay(500).addClass("animated wobble");
                setTimeout(function () {
                    $(".section7 img").removeClass("animated wobble");
                },1000);
            }
        },
        onLeave: function (index,direction) {
            if(index==1){
                $(".section1 img").delay(500).fadeOut(300);
            }
            if(index ==2 ){
                $(".section2 img").slideUp(300);
            }
        }
    });}
)