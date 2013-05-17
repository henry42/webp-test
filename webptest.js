(function(global){
    var Webp = {} , image , support,supportCallbacks = [] , unsupportCallbacks = [];

    function done(){
        var callbacks = support ? supportCallbacks : unsupportCallbacks;
        while( callbacks.length > 0 )
            try{ callbacks.shift().call(global); }catch(e){}
        supportCallbacks.length = unsupportCallbacks.length = 0;
        Webp.support = support;
    }

    Webp.ver = '1.0';

    Webp.test = function( supportCallback , unsupportCallback ){

        var validSupportCallback = typeof supportCallback === 'function',
            validUnsupportCallback = typeof unsupportCallback === 'function';

        if( support === true )
            validSupportCallback && supportCallback.call( global );
        else if( support === false )
            validUnsupportCallback && unsupportCallback.call( global );
        else{
            validSupportCallback && supportCallbacks.push( supportCallback );
            validUnsupportCallback && unsupportCallbacks.push( unsupportCallback );
            if( !image ){
                image = new Image;
                image.onerror = function(){ support = false; done(); };
                image.onload = function(){ support = this.width == 1; done(); }
                image.src = 'data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA==';
            }

        }
    };

    if ( typeof define === "function" ) {
        define( "xwebp", [], function () { return Webp; } );
    }

    global.XWebp = Webp;

})(window);