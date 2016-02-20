$(function(){
    var footernav=$(".footernav");
    var banner=$(".banner");
    var hei=$(".kuangjia").height();
    var top=$(document).scrollTop();
    $(window).resize(function() {
        if ($(window).width()<=716) {
            $(".header1").css("display", "none");
            footernav.css("display","none");
            $(".lianjie").css({background:"#fff",marginTop:"5px"});
            $(".biger").css({margin:"0"});
            $(".navhead").css({marginLeft:"30px"}).click(function(){
                    var ii=$(this).index(".navhead");
                    footernav.finish();
                    $(".footernav:eq("+ii+")").slideToggle(200);
                });

            var ti;
            $(document).scroll(function(){
                if($(document).scrollTop()<130){
                    $('.header2').show();
                }else if($(document).scrollTop() > hei){
                    clearTimeout(ti);
                    ti = setTimeout(function(){
                        $('.header2').show();
                    },2000);
                }else{
                    clearTimeout(ti);
                    $('.header2').hide();
                }
            });
        } else {
            $(".header2").css("display", "none");
            footernav.css("display","block");
            $(".lianjie").css({background:"none",marginTop:"0"});
            $(".biger").css({margin:"10px 100px"});
            $(".navhead").css({marginLeft:"0"}).click(function(){
                    footernav.finish();
                });

            var ti;
            $(document).scroll(function(){
                if($(document).scrollTop()<200){
                    $('.header1').show();
                }else if($(document).scrollTop() > hei){
                    clearTimeout(ti);
                    ti = setTimeout(function(){
                        $('.header1').show();
                    },2000);
                }else{
                    clearTimeout(ti);
                    $('.header1').hide();
                }
            });
        }
    });
    $(window).resize();

    $(".cent-l").click(function(){
        $(window).finish();
        $(".menu").slideToggle(200);
    });
    $(".menu-title").click(function(){
        $(window).finish();
        $(this).children(".menu-con").slideToggle(200);
        $(".menu-title").css("font-weight","normal");
        $(this).css("font-weight","bold");
        $(".menu-con").css("font-weight","normal");
    });
    var num=0;
    //var num1;
    //var lunbo=function(){
    //    num++;
    //    if(num==$(".lists").length-1){
    //        banner.animate({marginLeft:(-num)*100+"%"});
    //        banner.css({marginLeft:0});
    //        num=0;
    //        $(".btn").removeClass("btnshow");
    //        $(".btn:eq("+num+")").addClass("btnshow");
    //    }else{
    //        banner.animate({marginLeft:(-num)*100+"%"});
    //        $(".btn").removeClass("btnshow");
    //        $(".btn:eq("+num+")").addClass("btnshow");
    //    }
    //};
    //var lunbotime=setInterval(lunbo,3000);
    //banner.hover(function(){
    //    clearInterval(lunbotime);
    //    num1=num;
    //},function(){
    //    clearInterval(lunbotime);
    //    num=num1;
    //    lunbotime=setInterval(lunbo,3000);
    //});
    //----------------------------------------------
    var mLeft;
    touch.on(document,"dragstart",function(e){
        mLeft=banner[0].offsetLeft;
    });
    touch.on(document,"drag",function(e){
        $(".banner:eq(0)").css({marginLeft:mLeft+ e.x});
    });
    touch.on(document,"dragend",function(e){
        if(Math.abs(e.x)>200 || e.factor<5){
            if(e.direction=="left"){
                if(num==$(".lists").length-1){
                    num++;
                    banner.animate({marginLeft:(-num)*100+"%"});
                    banner.css({marginLeft:0});
                    num=0;
                }else{
                    num++;
                    $(".banner:eq(0)").animate({marginLeft: num*-100+"%"});
                }
            }else if(e.direction=="right"){
                if(num==0){
                    banner.css({marginLeft:0});
                    return;
                }else{
                    num--;
                    $(".banner:eq(0)").animate({marginLeft: num*-100+"%"});
                }
            }
        }else{
            banner.animate({marginLeft:-num*100+"%"});
        }
    });

    banner.mousedown(function(e){
        e.preventDefault();
    });
    footernav.mousedown(function(e){
        e.preventDefault();
    });

    $(".ps").hover(function(){
        $(this).finish();
        $(this).attr({"data-a":"animate-fangda"});

    },function(){
        $(this).finish();
        $(this).attr({"data-a":"none"});
    });

    $(".webpromo").hover(function(){
        $(this).finish();
        $(this).attr({"data-a":"animate-raozhuanX"});
    },function(){
        $(this).finish();
        $(this).attr({"data-a":"none"});
    });


    $(".promo").hover(function(){
            $(this).finish();
        $(this).attr({"data-a":"animate-fanzhuan"});
        },function(){
            $(this).finish();
        $(this).attr({"data-a":"none"});
    });
    $("#xiangqign").click(function(){
        $(document).scrollTop((top+hei));
        console.log(top,hei);
    });
    $(".zhanshi").hover(function(){
        $(".imgs").finish();
        $(this).find(".imgs").slideDown();
    },function(){
        $(".imgs").finish();
        $(this).find(".imgs").slideUp();
    });

    $(".daohang").click(function(){
        var index=$(this).index(".daohang");
        $(document).scrollTop(hei*index);
        $(this).animate({background:"orange"})
    });
    $(".daohangs").click(function(){
        var index=$(this).index(".daohangs");
        $(document).scrollTop(hei*index);
        $(this).animate({background:"orange"});
    });
    $(".erweima").hover(function(){
        $(this).css("right","0")
    },function(){
        $(this).css("right","-150px")
    })


});