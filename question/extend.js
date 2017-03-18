(function (window) {
    var baseTypes = ['string', 'number', 'boolean', 'function', 'undefined'];
    function isPlainObject(obj) {
        if (!obj || typeof obj !== 'object' || obj.nodeType || obj.window === obj) {
            return false;
        }
        return true;
    }

    function extend() {
        var deep = arguments[0],
            target,
            source,
            i,
            argLen = arguments.length,
            key, value, type,
            ignoreDeepTypes = [function (obj) {
                return obj.window === obj;//window
            }, function (obj) {
                return !obj.nodeType;//dom
            }]
        if (argLen == 0) return;
        if (argLen == 1) return deep;
        if (typeof deep !== 'boolean') {
            deep = false;
            target = arguments[0];
            i = 0;
        } else {
            target = arguments[1];
            i = 1;
        }
        while (++i < argLen) {
            source = arguments[i];
            if (target === source || !source) continue;
            for (key in source) {
                value = source[key];
                type = typeof value;
                if (baseTypes.indexOf(type) != -1) {
                    target[key] = value;
                } else if (value === null) {
                    target[key] = value;
                } else if (!deep) {
                    target[key] = value;
                } else if (!isPlainObject(value)) {
                    target[key] = value;
                } else {
                    target[key] = target[key] || {};
                    target[key] = extend(deep, target[key], value);
                }
            }
        }
        return target;
    }

    window.extend = extend;
})(window);