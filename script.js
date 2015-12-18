VK.Widgets.Comments("vk_comments", {limit: 30, attach: "*"});

var triggerScroll = false;

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        if (!triggerScroll) {
            $('#scrollUp').fadeIn();
            triggerScroll = true;
        }
    } else {
        if (triggerScroll) {
            $('#scrollUp').fadeOut();
            triggerScroll = false;
        }
    }
});

$('#scrollUp').click(function(){
    $('html, body').animate({
        scrollTop: 0
    });
});

$('.btn-resize-left i').click(function(){
    $('.chat').animate({paddingTop: "-=60px"}, 100);
})

$('.btn-resize-right i').click(function(){
    $('.chat').animate({paddingTop: "+=60px"}, 100);
})