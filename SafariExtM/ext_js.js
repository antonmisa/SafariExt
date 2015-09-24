var MMExtensionClass = function() {};

MMExtensionClass.prototype = {
    run: function(arguments) {
        arguments.completionFunction({"URL": document.URL, "content": document.body.innerHTML});
    }
};

var ExtensionPreprocessingJS = new MMExtensionClass;