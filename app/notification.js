/**
 * Created by volkan on 26/02/16.
 */
var vg = vg || {};
vg.notification = {};
vg.notification.n = null;

vg.notification.checkNotification = function () {
    if (!Notification) {
        alert('Browser Notification desteklemiyor :(');
        return;
    }

    if (vg.notification.n) {
        vg.notification.n.close();
    }
    var $notification;
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        vg.notification.n = new Notification('Yeni Blog Yazısı', {
            icon: 'img/icon_128.png',
            body: "Algoritma verimliliği"
        });

        vg.notification.n.onclick = function () {
            vg.notification.n.close();
            window.open("http://volkanaltan.blogspot.com.tr/2016/01/algoritma-verimliligi.html");
        };
    }
};
