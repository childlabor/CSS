// 动画
function animating() {
    // 一幕
    $(".anim-layer01").fadeIn(100);
    $(".anim-ele1-2, .anim-ele1-1").addClass("animated");

    setTimeout(function () {
        $(".anim-ele1-3").show();
        $(".anim-ele1-3").addClass("animated");
        $(".chat1-1").lbyl({
            content: "  B城有什么适合办展的场地吗？",
            speed: 100,
            type: 'fade',
            fadeSpeed: 300,
            finished: function () {
                $(".anim-layer02").fadeIn(1000);
                $(".anim-layer01").delay(500).fadeOut(2000);
                $(".anim-ele1-1").removeClass("bounceInUp");
                $(".anim-ele1-2").removeClass("bounceInRight");
                $(".anim-ele1-3").fadeOut(2000);
                $(".anim-ele2-2, .anim-ele2-1").addClass("animated");
                setTimeout(function () {
                    $(".anim-ele2-3").fadeIn();
                    $(".anim-ele2-3").addClass("animated");
                    $(".chat2-1").lbyl({
                        content: "xx酒店，可否？",
                        speed: 120,
                        type: 'fade',
                        fadeSpeed: 300,
                        finished: function () {
                            // 第二段2-1
                            $(".anim-layer01").fadeIn(1000);
                            $(".anim-ele1-3").fadeIn(1000);
                            $(".anim-layer02").delay(500).fadeOut(2000);
                            $(".anim-ele2-2").removeClass("bounceInLeft");
                            $(".anim-ele2-1").removeClass("bounceInUp");

                            $(".chat1-1").empty();
                            setTimeout(function () {
                                $(".chat1-1").lbyl({
                                    content: "酒店有没有设备可展示我校的科技成果、专家团队？",
                                    speed: 80,
                                    type: 'fade',
                                    fadeSpeed: 300,
                                    finished: function () {
                                        // 第二段2-2
                                        $(".anim-layer02").delay(500).fadeIn(1000);
                                        $(".anim-ele2-3").delay(500).fadeIn(1000);
                                        $(".anim-layer01").delay(500).fadeOut(2000);
                                        $(".anim-ele1-1").removeClass("bounceInUp");


                                        $(".chat2-1").empty();
                                        setTimeout(function () {
                                            $(".chat2-1").lbyl({
                                                content: "做展板展示？",
                                                speed: 120,
                                                type: 'fade',
                                                fadeSpeed: 300,
                                                finished: function () {
                                                    // 第三段3-1
                                                    $(".anim-layer01").delay(500).fadeIn(1000);
                                                    $(".anim-ele1-3").delay(500).fadeIn(1000);
                                                    $(".anim-layer02").delay(500).fadeOut(1500);
                                                    // $(".anim-ele1-1").removeClass("bounceInUp");

                                                    $(".chat1-1").empty();
                                                    setTimeout(function () {
                                                        $(".chat1-1").lbyl({
                                                            content: "展板的形式太陈旧了，我需要具有科技感的展示效果。",
                                                            speed: 100,
                                                            type: 'fade',
                                                            fadeSpeed: 300,
                                                            finished: function () {
                                                                // 第三段3-2
                                                                $(".anim-ele1-2, .anim-ele2-2, .anim-ele2-3").hide();
                                                                $(".anim-ele1-3").delay(500).fadeOut(500);
                                                                $(".anim-layer02").delay(500).fadeIn(1000);
                                                                $(".anim-layer03").delay(1500).fadeIn(1000);
                                                                $(".anim-ele3-3").addClass("animated");
                                                                setTimeout(function () {
                                                                    $(".anim-ele3-3").removeClass("zoomIn").addClass("hinge");
                                                                    $(".anim-layer03").delay(1400).fadeOut(600);
                                                                }, 3000);
                                                                setTimeout(function () {
                                                                    $(".anim-ele1-1").addClass("fadeOutLeft");
                                                                    $(".anim-ele2-1").addClass("fadeOutRight");

                                                                    // 二幕
                                                                    setTimeout(function () {
                                                                        $(".part2 img").prop("src", "images/tit2.png");

                                                                        $(".anim-layer04").fadeIn(100);
                                                                        $(".anim-ele4-2, .anim-ele4-1").addClass("animated");
                                                                        $(".chat4-1").empty();
                                                                        setTimeout(function () {
                                                                            $(".anim-ele4-3").show().addClass("animated");
                                                                            $(".chat4-1").lbyl({
                                                                                content: "经理，发布会的场地拟定在xx酒店，但现场需要租用2块大展示屏、6块小展示屏，还需要聘请专业人士进行设备部署和屏幕操控…",
                                                                                speed: 80,
                                                                                type: 'fade',
                                                                                fadeSpeed: 300,
                                                                                finished: function () {
                                                                                    $(".anim-layer05").fadeIn(1000);
                                                                                    $(".anim-layer04").delay(500).fadeOut(1000);

                                                                                    // 二幕二段
                                                                                    $(".chat5-1").empty();
                                                                                    $(".anim-ele5-2, .anim-ele5-1").addClass("animated");
                                                                                    setTimeout(function () {
                                                                                        $(".anim-ele5-3").show().addClass("animated");
                                                                                        $(".chat5-1").lbyl({
                                                                                            content: "考虑到费用问题，就不举办产品发布会了……",
                                                                                            speed: 120,
                                                                                            type: 'fade',
                                                                                            fadeSpeed: 300,
                                                                                            finished: function () {
                                                                                                setTimeout(function () {
                                                                                                    $(".anim-ele5-3").removeClass("flipInX").addClass("rotateOutUpRight");
                                                                                                    $(".anim-ele5-1").removeClass("bounceInLeft").addClass("rotateOutUpLeft");
                                                                                                    $(".anim-layer05").fadeOut(1000);

                                                                                                    // 三幕
                                                                                                    setTimeout(function () {
                                                                                                        $(".part2 img").prop("src", "images/tit3.png");

                                                                                                        $(".anim-layer06").fadeIn(100);
                                                                                                        $(".anim-ele6-3").addClass("animated");

                                                                                                        setTimeout(function () {
                                                                                                            $(".chat6-1 .p1").show().addClass("animated");
                                                                                                            setTimeout(function () {
                                                                                                                $(".chat6-1 .p2").show().addClass("animated");
                                                                                                                setTimeout(function () {
                                                                                                                    $(".chat6-1 .p3").show().addClass("animated");
                                                                                                                    setTimeout(function () {
                                                                                                                        $(".chat6-1 .p4").show().addClass("animated");
                                                                                                                        setTimeout(function () {
                                                                                                                            $(".anim-ele6-2").fadeIn().addClass("animated");

                                                                                                                            // 动画结束，允许滑动
                                                                                                                            animateSkip = true;
                                                                                                                            $.fn.fullpage.setAllowScrolling(true);

                                                                                                                        }, 1500);
                                                                                                                    }, 800);
                                                                                                                }, 800);
                                                                                                            }, 800);
                                                                                                        }, 800);
                                                                                                    }, 1000);
                                                                                                }, 1000);
                                                                                            } // Finished Callback
                                                                                        })
                                                                                    }, 1500);
                                                                                } // Finished Callback
                                                                            })
                                                                        }, 1000);
                                                                    }, 1500);
                                                                }, 3000);
                                                            } // Finished Callback  
                                                        });
                                                    }, 1500);

                                                } // Finished Callback  
                                            });
                                        }, 1500);

                                    } // Finished Callback  
                                });
                            }, 1500);

                        } // Finished Callback  
                    });
                }, 1000);

            } // Finished Callback  
        });
    }, 1000);
}