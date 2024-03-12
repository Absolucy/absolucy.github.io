var referrer;
// Source: https://stackoverflow.com/a/26796447
function run_on_dom_ready(callback) {
    if (document.addEventListener) {
        // Mozilla, Opera and WebKit
        document.addEventListener("DOMContentLoaded", callback, false);
    } else if (document.attachEvent) {
        // If Internet Explorer, the event model is used
        document.attachEvent("onreadystatechange", function() {
            if (document.readyState === "complete") {
                callback();
            }
        });
    } else {
        // A fallback to window.onload, that will always work
        var oldOnload = window.onload;
        window.onload = function() {
            oldOnload && oldOnload();
            callback();
        };
    }
}
run_on_dom_ready(function() {
    var _window_frames, _window_frames_top, _window_frames_top_document, _referrer_toLowerCase, _document_cookie, _window_localStorage;
    var referrer = (document === null || document === void 0 ? void 0 : document.referrer) || (window === null || window === void 0 ? void 0 : (_window_frames = window.frames) === null || _window_frames === void 0 ? void 0 : (_window_frames_top = _window_frames.top) === null || _window_frames_top === void 0 ? void 0 : (_window_frames_top_document = _window_frames_top.document) === null || _window_frames_top_document === void 0 ? void 0 : _window_frames_top_document.referrer);
    if ((_referrer_toLowerCase = referrer === null || referrer === void 0 ? void 0 : referrer.toLowerCase()) === null || _referrer_toLowerCase === void 0 ? void 0 : _referrer_toLowerCase.includes("news.ycombinator")) {
        try {
            document.cookie = "fuck=off; path=/";
        } catch (e) {}
        try {
            var _window_localStorage1;
            window === null || window === void 0 ? void 0 : (_window_localStorage1 = window.localStorage) === null || _window_localStorage1 === void 0 ? void 0 : _window_localStorage1.setItem("fuck", "off");
        } catch (e) {}
    }
    if ((document === null || document === void 0 ? void 0 : (_document_cookie = document.cookie) === null || _document_cookie === void 0 ? void 0 : _document_cookie.includes("fuck=off")) || (window === null || window === void 0 ? void 0 : (_window_localStorage = window.localStorage) === null || _window_localStorage === void 0 ? void 0 : _window_localStorage.getItem("fuck")) === "off") {
        document.getElementsByClassName("content")[0].remove();
    }
});

