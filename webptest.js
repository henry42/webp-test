(function(global){
    var Webp = {} , image , support,supportCallbacks = [] , unsupportCallbacks = [];

    function done(){
        var callbacks = support ? supportCallbacks : unsupportCallbacks;
        while( callbacks.length > 0 )
            try{ callbacks.shift().call(global); }catch(e){}
        supportCallbacks.length = unsupportCallbacks.length = 0;
        Webp.support = support;
    }

    Webp.test = function( supportCallback , unsupportCallback ){
        if( support === true )
            supportCallback.call( global );
        else if( support === false )
            unsupportCallback.call( global );
        else{
            supportCallbacks.push( supportCallback );
            unsupportCallbacks.push( unsupportCallback );
            if( !image ){
                image = new Image;
                image.onerror = function(){ support = false; done(); };
                image.onload = function(){ support = this.width == 1; done(); }
                image.src = 'data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA==';
            }

        }
    };

    global.XWebp = Webp;

})(window);