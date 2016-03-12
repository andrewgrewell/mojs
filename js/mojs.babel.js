import h          from './h';
import shapesMap  from './shapes/shapesMap';
import Burst      from './burst';
import Transit    from './transit';
import Swirl      from './swirl';
import stagger    from './stagger';
import Spriter    from './spriter';
import MotionPath from './motion-path';
import Tween      from './tween/tween';
import Timeline   from './tween/timeline';
import Tweener    from './tween/tweener';
import Tweenable  from './tween/tweenable';
import tweener    from './tween/tweener';
import easing     from './easing/easing';

window.mojs = {
  revision:   '0.182.4', isDebug: true, helpers: h,
  Transit, Swirl, Burst, stagger, Spriter, MotionPath,
  Tween, Timeline, Tweenable, tweener, easing, shapesMap
}

mojs.h     = mojs.helpers;
mojs.delta = mojs.h.delta;

var ns   = 'http://www.w3.org/2000/svg'
var svg  = document.createElementNS(ns, 'svg');

var tr = new mojs.Transit({
  left: '50%', top: '50%',
  shape:    'polygon',
  strokeWidth: 20,
  angle:    { 0 : 200},
  radius:   10,
  fill:     'none',
  stroke:   { 'white': 'cyan' },
  points:   { 3 : 20 }, // make triangle
  duration: 2000,
  // delay:    4000,
  isShowEnd: 1,
  scale: { 0 : 6 },
  // timeline: { repeat: 2, yoyo: true },
  onStart: ()=> { console.log('start 1'); },
  onComplete: ()=> { console.log('comple 1'); },
  onFirstUpdate: ()=> { console.log('first update 1')},
  // easing: 'expo.in'
})
.then({
  onStart: ()=> { console.log('start 2')},
  onComplete: ()=> { console.log('comple 2'); },
  onFirstUpdate: ()=> { console.log('first update 2')},
  points:   3, // make triangle
  angle:    -180,
  duration: 300,
  stroke: 'yellow',
  easing: 'expo.in',
  scale: .5,
})
.then({
  onStart: ()=> { console.log('start 3')},
  onComplete: ()=> { console.log('comple 3'); },
  onFirstUpdate: ()=> { console.log('first update 3')},
  strokeWidth: 0,
  stroke: 'hotpink',
  duration: 400,
  easing: 'cubic.out',
  // scale: { 1: 1 },
  radius: 40,
  scale: 1,
  angle: 90,
  // speed: 1
  // opacity: 0
}) 
// .play();

var sliderEl = document.querySelector('#js-range-slider');
sliderEl && sliderEl.addEventListener('input', function() {
  tr.setProgress( sliderEl.value / 1000 );
});

// ### istanbul ignore next ###
if ( (typeof define === "function") && define.amd ) {
  define("mojs", [], function () { return mojs; });
}
// ### istanbul ignore next ###
if ( (typeof module === "object") && (typeof module.exports === "object") ) {
  module.exports = mojs;
}