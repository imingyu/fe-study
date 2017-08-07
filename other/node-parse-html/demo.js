var p5 = require('parse5');

var result = p5.parse('<div id="d1" show>D1</div><div id="d2" show="off">D2</div>', {
    locationInfo: true
});

var body = result.childNodes[0].childNodes[1];


var transformResult = [];
body.childNodes.forEach(item => {
    var element = {
        tagName: item.tagName,
        attrs: []
    };
    var onlyNameAttrs = [];
    Object.keys(item.__location.attrs).forEach(name => {
        var attr = item.__location.attrs[name];
        if (name.length === attr.endOffset - attr.startOffset) {
            onlyNameAttrs.push(name);
        }
    });
    item.attrs.forEach(attr => {
        if (onlyNameAttrs.indexOf(attr.name) === -1) {
            element.attrs.push({
                name: attr.name,
                value: attr.value
            })
        } else {
            element.attrs.push({
                name: attr.name,
                onlyName: true
            })
        }
    });

    transformResult.push(element);
});

console.log(transformResult);
/*
[
    {
        "tagName": "div",
        "attrs": [
            {
                "name": "id",
                "value": "d1"
            },
            {
                "name": "show",
                "onlyName": true
            }
        ]
    },
    {
        "tagName": "div",
        "attrs": [
            {
                "name": "id",
                "value": "d2"
            },
            {
                "name": "show",
                "value": "off"
            }
        ]
    }
]
*/