
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

// 모바일
    // 네비바 등장
    $('.gnb-btn-bars_m').on("click", function() {
        $('.gnb_m').css("display","block");
        $('.gnb-btn-close_m').css("display","block");
        $('.nav__depth2').css("display","none");

    });
    $('.gnb-btn-close_m').on("click", function() {
        $('.gnb_m').css("display","none");
        $(this).css("display", "none");
    }); 
    // 메뉴펼치기

    $('.nav__depth1').on("click", function() {
        $('.nav__depth2').hide();
        $(this).children().slideToggle();
    })        
    $('.nav__depth2').on("click", function() {
        $('.gnb_m').hide();
        $('.gnb-btn-close_m').hide();

    })     
    // 서브페이지에서 메뉴클릭 컨텐츠 바뀌기
    $('.menu-list').on("click", function() {
        var i = $(this).index();
        $('.main_m').hide();
        $('.menu-list').css({"background":"none", "color":"black"});
        $('.main_m').eq(i).css("display","block");
        $(this).css({"background":"coral", "color":"white"});
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
})
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