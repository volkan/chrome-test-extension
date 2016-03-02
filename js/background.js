window.onload=function(){
    chrome.runtime.onLaunched.addListener(function() {
        chrome.window.create('dashboard.html', {}, function() {});
    });
};
