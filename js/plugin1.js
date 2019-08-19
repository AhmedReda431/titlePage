$(function() {  
    $("body").niceScroll();
    $("body").niceScroll({
        cursorcolor:"aquamarine",
        cursorwidth:"16px",
    });
    $(window).on("scroll",function(){
        var sc = $(window).scrollTop();
        if(sc> 500){
            $(".scrollButton").fadeIn(1000)
        }else{
            $(".scrollButton").fadeOut(1000)
        }
    });
    $(".scrollButton").click(function(){
        $("html,body").animate({scrollTop:0},function(){
            $(".scrollButton").fadeOut(1000)
        })
    })
    $(".fa-twitter").hover(function(){
        $(this).css({color:"#2AA9E0",transition: "all .5s ease-in-out",borderColor: "#2AA9E0"})
    },function(){
         $(this).css({color:"#fff",borderColor: "#fff"});
    })
    $(".fa-facebook").hover(function(){
        $(this).css({color:"#4267B2",transition: "all .5s ease-in-out",borderColor: "#4267B2"})
    },function(){
         $(this).css({color:"#fff",borderColor: "#fff"});
    })
    $(".fa-instagram").hover(function(){
        $(this).css({color:"#9C34AD",transition: "all .5s ease-in-out",borderColor: "#9C34AD"})
    },function(){
         $(this).css({color:"#fff",borderColor: "#fff"});
    })
    $(".fa-envelope-o").hover(function(){
        $(this).css({color:"#DC4E41",transition: "all .5s ease-in-out",borderColor: "#DC4E41"})
    },function(){
         $(this).css({color:"#fff",borderColor: "#fff"});
    })

});





