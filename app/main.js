var vg = vg || {};

vg.imagesCount = 3;
vg.debug = false;

vg.simpleWeather = function (location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function(weather) {
            html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            html += '<ul><li>'+weather.city+'</li>';
            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
};

vg.setImageList = function () {
    for (var i = 1; i <= vg.imagesCount; i++) {
        var $key = vg.getKey(i);
        var $itm = localStorage.getItem($key);
        var $path = vg.getPath(i);
        if (!$itm || $itm != $path) {
            localStorage.setItem($key, $path);
        }
    }
};

vg.getKey = function (intVal) {
    var imageKey = 'big_img_' + intVal;
    return imageKey;
};

vg.getPath = function (intVal) {
    var path= 'background/slide_' + intVal + '.jpeg';
    return path;
};

vg.supersized = function (imgUrl) {
    $.supersized({
        slides: [{
            image : imgUrl
        }],
        image_protect: 0
    });
};

vg.showDateTime = function () {
    $('#dateTime').html(vg.utils.getTime());
};

vg.prepareSlider = function () {
    var value = vg.utils.getRandomInt(1, vg.imagesCount);
    if (vg.debug) console.log('rand value:' + value + ' img Count:' + vg.imagesCount);
    var $key = vg.getKey(value);
    var $path = localStorage.getItem($key);
    vg.supersized($path);
};

vg.onClick = function () {
    $('#notifications').on('click', function() {
        vg.notification.checkNotification();
    });
};

$(document).ready(function () {
    vg.setImageList();
    vg.simpleWeather('Istanbul', '');
    vg.showDateTime();
    vg.prepareSlider();
    vg.onClick();
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-678906-9']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
/*
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K7DN44');
*/