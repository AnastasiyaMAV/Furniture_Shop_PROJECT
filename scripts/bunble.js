(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('.splide', {
      type: 'loop',
      width: '90%',
      gap: 25,
      arrows: 'slider',
      perPage: 3,
      focus: 'center',
      slideFocus: true,
      flickMaxPages: 3,
      updateOnMove: true,
      pagination: true,
      padding: 0,
      throttle: 300,
      breakpoints: {
        768: {
          perPage: 1,
          padding: 0,
          arrows: false,
        }
      }
    }).mount();
  });
  
},{}]},{},[1]);
