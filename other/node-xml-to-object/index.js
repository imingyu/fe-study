var fs = require('fs');
var path = require('path');
var JSDOM = require('jsdom').JSDOM;

var fileName = path.join(__dirname, '/demo.wxml');
var fileContent = fs.readFileSync(fileName, 'utf8');

var dom = new JSDOM(fileContent);

var page = {
    tag: "page",
    children: []
}

var convert = (elementSpec) => {
    var result;
    if (elementSpec.nodeType != 1) {
        result = elementSpec.nodeValue;
    } else {
        result = {
            props: {},
            children: []
        };
        result.tag = (elementSpec.nodeName || elementSpec.tagName).toLowerCase();
        if (elementSpec.attributes && elementSpec.attributes.length > 0) {
            each(elementSpec.attributes, item => {
                result.props[item.name] = item.value;
            });
        }
        if (elementSpec.children && elementSpec.children.length > 0) {
            each(elementSpec.children, item => {
                result.children.push(convert(item));
            });
        }
    }
    return result;
}

var each = (arr, cb) => {
    if (arr && arr.length && arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            cb(arr[i], i);
        }
    }
}



console.log(JSON.stringify(page));
