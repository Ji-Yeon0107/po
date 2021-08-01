window.onload = function() { 
$(function() {
    // 모달창
    $('.modal-btn').on("click", function() {
        var i = $(this).index();
        $('.modal').fadeIn();
        $('.modal-cont').hide();
        $('.modal-cont').eq(i).fadeIn();
    });
    $('.shelf-box-txt>li').on("click", function() {
        var i = $(this).index();
        $('.modal').fadeIn();
        $('.modal-cont').hide();
        $('.modal-cont').eq(i).fadeIn();
    });
    $('.modal').click(function(){
        $('.modal').fadeOut();
    });

    // 회사소개 회사연혁
    $('.timeline-point').on("click", function() {
        let j = $(this).index()-1;
        $('.history-title').hide();
        $('.history-detail>img').css('opacity','0');
        $('.history-detail>img').eq(j).animate({opacity:'1'}, 600);
    });
    //(PC) snb
    $('.snb-list').mouseenter(function() {
        var i = $(this).index()-1;
        var he = 40;
        var listHeight = 40 *($(this).children().length-1) + he;
        $(this).eq(i).css("height", listHeight);
    });

    $('.snb-list').mouseleave(function() {
        var i = $(this).index()-1;
        var he = 40;
        $(this).eq(i).css("height", he);
    })
        var removeEvent = $(function() {     
        if (matchMedia("screen and (max-width:1200px)").matches) {
            $('.snb-list').off("mouseenter");
            $('.snb-list').off("mouseleave");
        }
    });
 // (모바일) 서브페이지에서 메뉴클릭 
        $('.snb-list').on("click", function() {
                $('.snb-list').css("height","40px");
                $('.snb-list-dep2').css("color","black");
                $(this).css("height","122px");
            })
 
    })
    
 


    
    // 서브페이지 - 초코파이 하우스 - 제품 소개
    $('.img-pointer').on("click", function() {
        if ($(this).children('.detail-all').css("opacity")=="0") {
            $(this).children('.detail-all').animate({opacity:"1"}, 400)
            $(this).children('.pointer-line').animate({opacity:"1"}, 50)
            $('.detail-all').css("opacity","0");
            $('.pointer-line').css("opacity","0");
        } else {    
        }
    })
// 모바일

    // 네비바 등장
    $('.gnb-btn-bars_m').on("click", function() {
        $('.gnb_m').show();
        $('.gnb_m').animate({opacity:"1", right:"0"}, 500);
        // $('.gnb_m').animate({right:"0"}, 1000);
        $('.gnb-btn-close_m').animate({opacity:"1"}, 500);
        $('.nav__depth2').css("display","none");
        $(this).hide();

    });
    $('.gnb-btn-close_m').on("click", function() {
        $('.gnb_m').animate({opacity:"0", right:"-50%"}, 500);
        $(this).animate({opacity:"0"}, 200);
        $('.gnb-btn-bars_m').show();
    }); 
    // 메뉴펼치기
    $('.nav__depth1').on("click", function() {

        $('.nav__depth1').css("color","white");
        $('.nav__depth2').not($(this).children()).hide();
        $(this).children('.nav__depth2').slideToggle(function() {
            $(this).parents('.nav__depth1').css("color","coral");
            $(this).css("color","white");
        });
    })        
    $('.nav__depth2').on("click", function() {
        $('.gnb_m').hide();
        $('.gnb-btn-close_m').hide();

    }) 
    // 인덱스 메인 상단 이미지
    var contentLength = $(".content_m").length;
    var currentIndex = 0;
    var current = 0;
    var timeID;
    timer();
    function timer() {
        timeID = setInterval(function(){
            currentIndex++;
            if(currentIndex >= contentLength) { currentIndex=0 };
            showImage(currentIndex);
        })
    };
    function showImage(i) {
        $(".content_m").fadeOut(2000);
        $(".content_m").eq(i).fadeIn(2000);
    }
    
 

// SWIPER
var swiper = new Swiper('.swiper-container', {
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:10,
    loop: true, 
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
  });
  var swiperBrand = new Swiper('.swiper-container2', {
    slidesPerView:3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
  });

}




    // if($('.nav-depth2').css("display") == "block" && $('.nav-depth2').children().length !== 0) {
    //     $('.nav-depth2').on("click", function() {
    //         $(this).children().css("display","block")
    //     })
    //     } else if ($('.nav-depth2').css("display")=="none") {
    //             $(this).children().css("display","block");
    //         } else {
    //             $(this).children().css("display","none");
    //         }
    //     })

    // $('.nav-depth1').on("click", function() {
    //     if($(this).children().css("display") =="none") {
    //         $(this).children().css("display", "block")
    //     } else {
    //         $(this).children().css("display","none");
    //     }
    // });
    // $('.nav-depth2').on("click", function() {
    //     if($(this).children().css("display") =="none") {
    //         $(this).children().css("display", "block")
    //     } else {
    //         $(this).children().css("display","none");
    //     }
    // });

    // $('.shelf-box> img').on("click", function() {
    //     no = $(this).index();
    //     $('.gran-modal> li').hide();
    //     $('.gran-modal> li:eq('+ no+')').show();
    // })

//depth3메뉴였을때
    // $('.nav__depth1').on("click", function() {
    //     $('.nav__depth3').not($(this).find('.nav__depth3')).css("display","none");
    //     $('.nav__depth2').css("display", "none");
    //     $(this).children().slideDown();

    //     $('.nav__depth2').on("click", function() {
    //         $('.nav__depth3').css("display","none");
    //         if($(this).children().length !==0) {
    //             $(this).children().slideDown();
    //         } else {
    //             $('.gnb_m').css("display","none");
    //             $('.gnb-btn-close_m').css("display","none");
    //         }
    //     });
    //     $('.nav__depth3').on("click", function() {
    //         $('.gnb_m').css("display","none");
    //         $('.gnb-btn-close_m').css("display","none");
    //     });