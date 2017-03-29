(function (window, undefined) {
    var _$ = window.$,
        lite = function (selector, context) {
            if (typeof selector === "function") {
                $(window.document).ready(selector);
                return this;
            } else {
                return lite.fn.init(selector, context);
            }
        }
    window.$ = lite;
    lite.fn = lite.prototype;
    lite.fn.init = function (selector, context) {
        if (typeof selector === "string") {
        }
    };
    lite.fn.is = function (selector) {
    }

    lite.readys = [];
    lite.fn.ready = function (func) {
        if (lite.readys.indexOf(func) == -1) {
            lite.readys.push(func);
        }
    }
})(window, undefined);