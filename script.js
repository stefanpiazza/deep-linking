var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;

var storeLink = (isAndroid ? 'https://play.google.com/store/apps/details?id=com.nike.ntc&hl=en' : 'https://itunes.apple.com/gb/app/nike+-training-club/id301521403?mt=8');
var now = new Date().valueOf();

setTimeout(function () {
    if (new Date().valueOf() - now > 500) { return; }
        window.parent.location = storeLink;
}, 100);

window.parent.location = 'ntc://home';
