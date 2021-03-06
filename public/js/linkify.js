var supports3DTransforms =  document.body.style['webkitPerspective'] !== undefined ||
                            document.body.style['MozPerspective'] !== undefined;

var linkify = function(selector) {
    if( supports3DTransforms ) {
        var nodes = document.querySelectorAll( selector );
        for( var i = 0, len = nodes.length; i < len; i++ ) {
            var node = nodes[i];
            if(node.className.match( /roll/g )){
                node.innerHTML = '<span data-title="'+ node.text +'">' + node.innerHTML + '</span>';
            }
        };
    }
};
