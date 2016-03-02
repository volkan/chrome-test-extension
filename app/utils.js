/**
 * Created by volkan on 26/02/16.
 */
var vg = vg || {};
vg.utils = {};

vg.utils.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

vg.utils.getTime = function () {
    var dt = new Date();
    var minutes = dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes();
    var time = dt.getHours() + ":" + minutes;
    return time;
};
