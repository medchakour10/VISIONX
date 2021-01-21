// Prevent closing from click inside dropdown
$('.dhive-collapse-link a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

$('.dropdown-menu').click(function (e) {
    e.stopPropagation();
});

// make it as accordion for smaller screens
if ($(window).width() < 992) {
    $('.dropdown-menu a').click(function (e) {
        // e.preventDefault();
        if ($(this).next('.submenu').length) {
            $(this).next('.submenu').toggle();
        }
        $('.dropdown').on('hide.bs.dropdown', function () {
            $(this).find('.submenu').hide();
        })
    });
}