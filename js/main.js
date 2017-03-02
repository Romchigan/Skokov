jQuery(function ($) {
    var available = [
        "Kyiv",
        "Kharkiv",
        "Kryvyi Rih",
        "Kherson",
        "Khmelnytskyi",
        "Kremenchuk"
    ];
    $('#banner-search').autocomplete({
        source: available
    });

    var btnMoreExplore = $('#explore-more');
    btnMoreExplore.on('click',function () {
        $('.destinations-wrap li:hidden').slice(0,3).fadeIn(600);
        if ($('.destinations-wrap li:hidden').length==0) {
            btnMoreExplore.fadeOut(500);
        }
    });


    var btnMoreBoats = $('#more-boats');
    btnMoreBoats.on('click',function () {
        $('.destinations-wrap-boats li:hidden').slice(0,2).fadeIn(600);
        if ($('.destinations-wrap-boats li:hidden').length==0) {
            btnMoreBoats.fadeOut(500);
        }
    });


    $('.modal-dest').on('click', function () {
        var head = $('h1', this).text(),
            subHead = $('p', this).text();

        $('#modalWindow h1').text('City or port : '+head);
        $('#modalWindow p').text('Country : '+subHead);
    });

});