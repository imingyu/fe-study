(function (window) {
    //不完善，只做练习使用
    function createXhr() {
        try {
            if (window.XMLHttpRequest) {
                return new window.XMLHttpRequest();
            } else {
                return new window.ActiveXObject("Microsoft.XMLHTTP");
            }
        } catch (error) {
            console.error('[ajax error]无法创建xhr对象，错误详情：', error);
        }
    }
    function ajax(options) {
        var defaultOptions = {
            get: {
                method: 'get',
                user: null,
                password: null,
                async: true
            },
            post: {
                method: 'post',
                user: null,
                password: null,
                async: true
            },
            put: {
                method: 'put',
                user: null,
                password: null,
                async: true
            },
            delete: {
                method: 'delete',
                user: null,
                password: null,
                async: true
            }
        };

        options = options || {};
        options.mothed = options.mothed || 'get';
        options = extend({}, defaultOptions[options.mothed], options);

        return new Promise((r, j) => {
            var xhr = createXhr();
            if (!options.headers) {
                for (var key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }
            if (!options.xhrFields) {
                for (var key in options.xhrFields) {
                    xhr[key] = options.xhrFields[key];
                }
            }
            xhr.open(options.method, options.url, options.async, options.user, options.password);
            xhr.send(options.data || null);
            xhr.onreadystatechange = function () {
                if(xhr.readyState === XMLHttpRequest.DONE){
                    if(xhr.status===200){
                        r(xhr.responseText);
                    }else{
                        j();
                    }
                }
            }
        });
    }
    window.ajax = ajax;
})(window);