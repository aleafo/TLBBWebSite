/*
 * 2020-01-09 osuliping
 */
(function (window) {
    "use strict"
    function localStorageExpire() {
    };
    localStorageExpire.prototype = {
        constructor: localStorageExpire,
        //写LocalStorage
        setLocalStorage: function (key, value, exp) {
            var lKey=key+'_expire';
            var curtime = new Date().getTime();
            var valueDate = JSON.stringify({
                val: value,
                timer: curtime,
                exp: exp
            });
            localStorage.setItem(lKey, valueDate);
        },
        //取LocalStorage
        getLocalStorage: function (key) {
            var lKey=key+'_expire';
            if (localStorage.getItem(lKey)) {
                var newValue = null;
                var vals = localStorage.getItem(lKey);
                var dataObj = JSON.parse(vals);
                var isTimed = (new Date().getTime() - dataObj.timer) > dataObj.exp;
                if (isTimed) {
                    //console.log("存储已过期");
                    localStorage.removeItem(lKey);
                    return null;
                } else {
                    newValue = dataObj.val;
                }
                return newValue;
            } else {
                return null;
            }
        }
    }
    !('localStorageExpire' in window) && (window.localStorageExpire = new localStorageExpire());
}(window));