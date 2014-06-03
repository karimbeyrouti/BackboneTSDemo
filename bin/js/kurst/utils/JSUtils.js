define(["require", "exports"], function(require, exports) {
    var JSUtils = (function () {
        function JSUtils() {
        }
        JSUtils.isAndroid = function () {
            return navigator.userAgent.match(/Android/i) ? true : false;
        };

        JSUtils.isBlackBerry = function () {
            return navigator.userAgent.match(/BlackBerry/i) ? true : false;
        };

        JSUtils.isIOS = function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        };

        JSUtils.isWindowsMob = function () {
            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        };

        JSUtils.isMobile = function () {
            return (JSUtils.isAndroid() || JSUtils.isBlackBerry() || JSUtils.isIOS() || JSUtils.isWindowsMob());
        };

        JSUtils.getId = function (id) {
            return document.getElementById(id);
        };

        JSUtils.getClass = function (className) {
            return document.getElementsByClassName(className);
        };

        JSUtils.getElementsByClassNme = function (theClass) {
            var classElms = new Array();
            var node = document;

            var i = 0;

            if (node.getElementsByClassName) {
                var tempEls = node.getElementsByClassName(theClass);

                for (i = 0; i < tempEls.length; i++)
                    classElms.push(tempEls[i]);
            } else {
                var getclass = new RegExp('\\b' + theClass + '\\b');
                var elems = node.getElementsByTagName('*');

                for (i = 0; i < elems.length; i++) {
                    var classes = elems[i]['className'];

                    if (getclass.test(classes))
                        classElms.push(elems[i]);
                }
            }

            return classElms;
        };

        JSUtils.getQueryParams = function (qs) {
            qs = qs.split("+").join(" ");

            var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;

            while (tokens = re.exec(qs)) {
                params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
            }

            return params;
        };

        JSUtils.isFireFox = function () {
            return (navigator.userAgent.search("Firefox") != -1);
        };

        JSUtils.isIE = function () {
            return (navigator.appVersion.indexOf("MSIE") != -1);
        };

        JSUtils.getIEVersion = function () {
            if (JSUtils.isIE())
                return parseFloat(navigator.appVersion.split("MSIE")[1]);

            return -1;
        };

        JSUtils.isFlashEnabled = function () {
            if (JSUtils.isIE()) {
                var version = JSUtils.getIEVersion();

                if (version > 8) {
                    return (window['ActiveXObject'] && (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) != false);
                } else {
                    try  {
                        var aXObj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');

                        if (aXObj)
                            return true;

                        return false;
                    } catch (ex) {
                        return false;
                    }
                }

                return false;
            } else {
                return ((typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object") != false);
            }
        };
        return JSUtils;
    })();

    
    return JSUtils;
});
