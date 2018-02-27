
var animateSkip = false; // 动画进程标记
$(function () {
    // 整屏切换
    $('#kyzt').fullpage({
        continuousVertical: true, // 循环滑动

        afterRender: function () {
           // resetFpHeight()
           $(".logo").show().addClass("animated");
           $(".middle-line").addClass("on");
           $(".info1, .info2").delay(300).fadeIn().addClass("animated");
        },
        afterResize: function () {
           // resetFpHeight()
        },

        afterLoad: function (anchorLink, index) {
            // 二屏动画
            if (index == 1) {               
                $(".logo").show().addClass("animated");               
                $(".middle-line").addClass("on");
                $(".info1, .info2").delay(200).fadeIn().addClass("animated");
            } else {
                $(".middle-line").removeClass("on");
                $(".info1, .info2, .logo").hide().removeClass("animated");
            }
            if(index == 2) {
                $(".pg2-1, .pg2-2, .pg2-3, .pg2-4, .pg2-5, .pg2-6").fadeIn().addClass("animated");
            } else {
                $(".pg2-1, .pg2-2, .pg2-3, .pg2-4, .pg2-5, .pg2-6").removeClass("animated").fadeOut();
            }
            if (index == 3) { 
                $(".pg3-1, .pg3-2").fadeIn().addClass("animated");
                setTimeout(function(){
                    $(".pg3-p .p1").show().addClass("animated");
                }, 600);
                setTimeout(function () {
                    $(".pg3-p .p2").show().addClass("animated");
                }, 1200);
                setTimeout(function () {
                    $(".pg3-p .p3").show().addClass("animated");
                }, 1800);                        
            } else {
                $(".pg3-1, .pg3-2, .pg3-p p").removeClass("animated").fadeOut();
            }
            if (index == 4) {
                $(".pg4-1").fadeIn(600);

                $(".anim-layer04").fadeIn(100);
                $(".anim-ele4-2, .anim-ele4-1").addClass("animated");
                $(".chat4-1").empty();
                setTimeout(function () {
                    $(".anim-ele4-3").show().addClass("animated");
                    $(".chat4-1").lbyl({
                        content: "经理，发布会的场地拟定在xx酒店，但现场需要租用2块大展示屏、6块小展示屏，还需要聘请专业人士进行设备部署和屏幕操控…费用比预算多3倍。",
                        speed: 60,
                        type: 'fade',
                        fadeSpeed: 200,
                        finished: function () {
                            $(".anim-layer04").delay(1000).fadeOut(1000);

                            // 二幕二段
                            $(".chat5-1").empty();
                            setTimeout(function () {
                                $(".anim-layer05").fadeIn(1000);
                                $(".anim-ele5-2, .anim-ele5-1").addClass("animated");
                                $(".anim-ele5-3").show().addClass("animated");
                                $(".chat5-1").lbyl({
                                    content: "考虑到费用问题，就不举办产品发布会了……",
                                    speed: 120,
                                    type: 'fade',
                                    fadeSpeed: 300,
                                    finished: function () {
                                        // setTimeout(function () {
                                        //     $(".anim-ele5-3").removeClass("flipInX").addClass("rotateOutUpRight");
                                        //     $(".anim-ele5-1").removeClass("bounceInLeft").addClass("rotateOutUpLeft");
                                        //     $(".anim-layer05").fadeOut(1000);
                                        // },1000)
                                    }
                                })
                            }, 1500);
                        }
                    });
                }, 1000);
            } else {
                $(".pg4-1, .anim-layer05").fadeOut();
                $(".anim-ele5-2, .anim-ele5-1, .anim-ele5-3").removeClass("animated").fadeOut;
            }

            // if (index == 5 ) {
            //     $(".pg-list").fadeIn();
            //     $(".logo2, .pg5-p, .pg5-h, .pg5-cr").fadeIn().addClass("animated2")
            // }
            if (index == 5) {
                $(".s3-p5-2, .s3-p5-1").show().addClass("animated");
            } else {
                $(".s3-p5-2, .s3-p5-1").removeClass("animated").fadeOut();
            }

            // 6屏tabs
            if (index == 6) { 
                $(".scene-desc").addClass("animated").fadeIn();
                $(".scene-info").on("click", ".scene-desc:not('.last')", function(){
                    var screenI = $(this).index();

                    $(this).addClass("on").siblings().removeClass("on");
                    $(".scene").find(".img-box").eq(screenI).fadeIn().siblings().fadeOut();
                });
            } else {
               $(".scene-desc").removeClass("animated").fadeOut();
            }

            if (index == 7) {
                $(".s3-p7-2, .s3-p7-1").show().addClass("animated");
            } else {
                $(".s3-p7-2, .s3-p7-1").removeClass("animated").fadeOut();
            }
            // if (index == 8) {
            //     $(".p8-part1").fadeIn(600).delay(1500).fadeOut();
            //     $(".p8-part2").delay(2100).fadeIn(600).delay(1500).fadeOut();
            //     $(".p8-part3").delay(4200).fadeIn(600).delay(1500).fadeOut();
            //     $(".p8-part4").delay(6300).fadeIn(600);
            // } else {
            //      $(".p8-part1, .p8-part2, .p8-part3, .p8-part4").fadeOut();
            // }
            if (index == 8) {
                $(".p8-part1").fadeIn().addClass("animated");
            } else {
                $(".p8-part1").removeClass("animated").fadeOut();
            }
            if (index == 9) {
                $(".p8-part2").fadeIn().addClass("animated");
            } else {
                $(".p8-part2").removeClass("animated").fadeOut();
            }
            if (index == 10) {
                $(".p8-part3").fadeIn().addClass("animated");
            } else {
                $(".p8-part3").removeClass("animated").fadeOut();
            }
            if (index == 11) {
                $(".p8-part4").fadeIn().addClass("animated");
            } else {
                $(".p8-part4").removeClass("animated").fadeOut();
            }
            if (index == 12) {
                $(".s3-p9-2, .s3-p9-1").show().addClass("animated");
            } else {
                $(".s3-p9-2, .s3-p9-1").removeClass("animated").fadeOut();
            }

            if (index == 13) {
                $(".pg-list").show();
                $(".logo2, .pg7-h, .pg7-sq").show().addClass("animated");
            } else {
                $(".logo2, .pg7-h, .pg7-sq").removeClass("animated").fadeOut();
            }
            
        }
    });

    // 四屏slide
    // setInterval(function () {
    //     $.fn.fullpage.moveSlideRight();
    // }, 5600);

    // 未完成动画禁止滑动
    // if (!animateSkip) {      
    //     $.fn.fullpage.setAllowScrolling(false);
    // }

    // 所有加载完毕开始动画

        // 一屏动画box高度
        // var H = $(window).height() -
        //     $(".sys-addr").height() -
        //     $(".part1").outerHeight(true) -
        //     $(".part2").outerHeight(true) -
        //     $(".fixed-menu").height();

        // $(".animate-wrap").height(H);      

        // $(window).resize(function () {
        //     var H = $(window).height() -
        //         $(".part1").outerHeight(true) -
        //         $(".part2").outerHeight(true) -
        //         $(".fixed-menu").height();

        //     $(".animate-wrap").height(H);
        // });

        // 动画
       // animating();
    $(".bgm").on("click", function(){
        $(this).toggleClass("pause");
        var audio = document.getElementById('audio');
        if (!$(this).hasClass("pause")) {
            audio.play();   
        } else {
            audio.pause();            
        }
    });
    $(".next-arrow").on("click", function(){
        $.fn.fullpage.moveSectionDown()
    })

});

// ===============================

// 修改fullpage的fp-tableCell默认高度
function resetFpHeight() {
    var h = $(window).height() - $(".zt-name2").outerHeight(true) - $(".fixed-menu").outerHeight(true);
    $(".fp-tableCell").height(h);
}

