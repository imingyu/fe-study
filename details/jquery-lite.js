(function (window, undefined) {
    var _$ = window.$,
        lite = function (selector, context) {
            if(typeof selector==="function"){
                $(window.document).ready(selector);
                return this;
            }else{
                return lite.fn.init(selector, context);
            }
        }
    lite.fn = lite.prototype;
    lite.fn.init = function (selector, context) {
        if(typeof selector==="string"){
        }
    };

    lite.fn.ready=function(func){
        console.log('ready');
        func();
    }
})(window, undefined);