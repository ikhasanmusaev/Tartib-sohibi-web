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
    })
})

