swfobject.embedSWF("img/christmastree.swf", "tree", "104", "152", "9.0.0", null, null, {wmode:"transparent"});

VK.Widgets.Comments("vk_comments", {limit: 30, attach: "*", autoPublish: 0});

$('#donate').on('show.bs.modal', function () {
    $('html, body').animate({
        scrollTop: $('#help-project').position().top,
        duration: 600
    });
});

var triggerScroll = false;

$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
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

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('#wcomments_more_link').click();
    }
});

$('#snow').change(function(){
    $('#canvas').toggle();
})

$('#ornament').change(function(){
    if (this.checked) {
        $('.bg-left img, .bg-right img').show();
        $('.bg-none').removeClass('bg-none').addClass('bg-pattern');
    } else {
        $('.bg-left img, .bg-right img').hide();
        $('.bg-pattern').removeClass('bg-pattern').addClass('bg-none');
    }
})
