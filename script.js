VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});

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

/*
$('.btn-resize-left i').click(function(){
    alert('Ok!');
})*/
