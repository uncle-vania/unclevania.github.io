VK.Widgets.Comments("vk_comments", {limit: 30, attach: "*"});

var triggerScroll = false;

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        if (!triggerScroll) {
            $('#scrollUp, #scrollDown').fadeIn();
            triggerScroll = true;
        }
    } else {
        if (triggerScroll) {
            $('#scrollUp, #scrollDown').fadeOut();
            triggerScroll = false;
        }
    }
});

$('#scrollUp').click(function(){
    $('html, body').animate({
        scrollTop: 0,
        duration: 600
    });
});

$('#scrollDown').click(function(){
    var page_height = $('body').height();
    $('html, body').animate({
        scrollTop: page_height,
        duration: 600
    });
});

$('.btn-resize-left i').click(function(){
    $('.chat').animate({paddingTop: "-=60px"}, 100);
})

$('.btn-resize-right i').click(function(){
    $('.chat').animate({paddingTop: "+=60px"}, 100);
})