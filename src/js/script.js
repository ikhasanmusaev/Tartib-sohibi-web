$(document).ready(function () {
    let bars = $('.bars');
    let times = $('.times');
    let link = $('.header-men-link');

    bars.click(function () {
        bars.css({
            'display': 'none'
        });
        times.css({
            'display': 'block',
            'position': 'fixed',
            'z-index': '2',
            'top': '34px',
            'right': '57px'
        });
        $('.menus').css({
            'right': '0'
        })
    })
    times.click(function () {
        times.css({
            'display': 'none'
        });
        bars.css({
            'display': 'block',
        })
        $('.menus').css({
            'right': '-102%'
        })
    })
    link.click(function () {
        times.css({
            'display': 'none'
        });
        bars.css({
            'display': 'block',
        });
        $('.menus').css({
            'right': '-102%'
        })
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 230) {
            $('#back-to-top').show();
        } else {
            $('#back-to-top').hide();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

})

