window.onload = function() {

$(function() {

// 태블릿, 모바일

    // (모바일) 서브페이지에서 메뉴클릭 
    $('.snb-list').on("click", function() {
        var listHeight = 40 *($(this).children().length+1);
            $('.snb-list').css("height","40px");
            $('.snb-list-dep2').css("color","black");
            $(this).css("height",listHeight);
        })
    
    // 네비바 등장
    $('.gnb_m').hide();
    $('.gnb-btn-close_m').hide();
    $('.gnb-btn-bars_m').on('click', function() {
        $('.gnb_m').show();
        $('.gnb-btn-close_m').show();
        $('.gnb_m').stop().animate({opacity:'1', right:'0'}, 500);
        $('.gnb-btn-close_m').stop().animate({opacity:'1'}, 500);

        $('.nav__depth2').css("display","none");
        $(this).hide();
    });
    $('.gnb-btn-close_m').on('click', function() {
        $('.gnb_m').stop().animate({opacity:'0', right:'-50%'}, 500);
        $(this).stop().animate({opacity:'0'}, 200);
        $('.gnb-btn-bars_m').show();
    }); 
    // 메뉴펼치기
    $('.nav__depth1').on("click", function() {
        
        $('.nav__depth1').css("color","white");
        $('.nav__depth2').not($(this).children()).hide();
        $(this).children('.nav__depth2').slideToggle(function() {
            $(this).parents('.nav__depth1').css("color","coral");
            $(this).css("color","white");
        })
    })        
    $('.nav__depth2').on("click", function() {
        $('.gnb_m').hide();
        $('.gnb-btn-close_m').hide();
        $('.gnb-btn-bars_m').show();
    }) 
    // 인덱스 메인 상단 이미지
    var banner = $(".content-list_m");
    var bannerLength = banner.find("img").length;
    var currentIndex = 0;
    $(".next").click(function(){ 
        currentIndex++; 
        if(currentIndex >= bannerLength){ currentIndex=0; }; 
        showImage(currentIndex); 
        
    });
    $(".prev").click(function(){ 
        currentIndex--;
        if(currentIndex < 0){ currentIndex=bannerLength -1; }; 
        showImage(currentIndex);
    });
    function showImage(index) {
        $(".content-list_m img").stop().fadeOut(1000);
        $(".content-list_m img").eq(index).stop().fadeIn(2000);
    };
    var current = 0;
    var timeID;
    timer();
  
    $(".inner").on({
        mouseenter:function() {
            clearInterval(timeID);
        },
        mouseleave:function() {
            timer();
        }
    })
    function timer() {
        timeID = setInterval(function(){
            $(".next").trigger("click");
        }, 3000);
    };

//PC

    // swiper 이동 화살표 버튼
    $('.swiper-button-prev-pc').mouseenter(function(){
        pauseButton()
    })
    $('.swiper-button-next-pc').mouseenter(function(){
        pauseButton()
    })
    $('.swiper-button-prev-pc').mouseleave(function() {
        runButton()
    })
    $('.swiper-button-next-pc').mouseleave(function(){
        runButton()
    })

    //snb
    $('.snb-list').mouseenter(function() {
        var i = $(this).index()-1;
        var listHeight = 40 *($(this).children().length+1);
        $(this).eq(i).css("height", listHeight);
    });

    $('.snb-list').mouseleave(function() {
        var i = $(this).index()-1;
        $(this).eq(i).css("height", "40");
    })
    
        var removeEvent = $(function() {     
        if (matchMedia("screen and (max-width:1200px)").matches) {
            $('.snb-list').off("mouseenter");
            $('.snb-list').off("mouseleave");
        }
    });

    // 모달
    $('.modal-btn').on("click", function() {
        var i = $(this).index();
        $('.modal').fadeIn();
        $('.modal-cont').hide();
        $('.modal-cont').eq(i).fadeIn();
        $('body').css('overflow','hidden');
    });
    $('.shelf-box-txt>li').on("click", function() {
        var i = $(this).index();
        $('.modal').fadeIn();
        $('.modal-cont').hide();
        $('.modal-cont').eq(i).fadeIn();
        $('body').css('overflow','hidden');

    });
    $('.modal').click(function(){
        $('.modal').fadeOut();
        $('body').css('overflow','visible');
    });

    // 회사소개 회사연혁
    $('.timeline-point').on("click", function() {
        let j = $(this).index()-1;
        $('.timeline-point').css("backgroundColor","#63371a");
        $('.history-title').hide();
        $('.history-detail>img').css('opacity','0');
        $('.history-detail>img').eq(j).animate({opacity:'1'}, 600);
        $(this).css("backgroundColor","red");
    });

    $('.history-year li').on("click", function() { 
        let i = $(this).index();
        $('.timeline-point').css("backgroundColor","#63371a");
        $('.history-title').hide();
        $('.history-detail>img').css('opacity','0');
        $('.history-detail>img').eq(i).animate({opacity:'1'}, 600);
        $('.timeline-point').eq(i).css("backgroundColor","red");
    });
    
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
});

function pauseButton() {
    $('.swiper-button-prev-pc').css({'animationPlayState':'paused'})
    $('.swiper-button-next-pc').css({'animationPlayState':'paused'})
}
function runButton(){
    $('.swiper-button-prev-pc').css({'animationPlayState':'running'})
    $('.swiper-button-next-pc').css({'animationPlayState':'running'})
}

}