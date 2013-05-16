webp-test
=========

## Basics

WebP is an image format that employs both lossy[7] and lossless compression.
Webp-test is a javascript tool to check whether the browser support webp.

## Usage

```js

XWebp.test( function(){
    console.info('your browser support webp');
} , function(){
    console.info('your browser do not support webp');
});

```

It checks asynchronously when you first call the function. The callbacks will be fired immediately when having the result.