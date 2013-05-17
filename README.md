webp-test
=========

## Basics

Webp-test is a javascript tool to check whether the browser support webp.

## Why Webp Test?

[WebP](https://developers.google.com/speed/webp/) is an image format that employs both lossy and lossless compression.
The degree of compression is adjustable so a user can choose the trade-off between file size and image quality. WebP typically achieves an average of 39% more compression than JPEG and JPEG 2000, without loss of image quality.
But a few browsers support WebP right now (as of April 2010, Google Chrome 9+ and Opera 11.10 beta).
Now you can use webptest to test the browser whether it supports and choose the right solution.

## Usage

```js

XWebp.test( function(){
    console.info('your browser support webp');
} , function(){
    console.info('your browser do not support webp');
});

```

It checks asynchronously when you first call the function. The callbacks will be fired immediately when having the result.

For More Information or Examples , please visit [http://i.chillrain.com/index.php/webp-test/](http://i.chillrain.com/index.php/webp-test/ )