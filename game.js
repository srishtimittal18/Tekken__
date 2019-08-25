// JavaScript Document
//checking merge

(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 800,
    height = 400,
    player1 = {
      x: (width / 4),
      y: height - 100,
      width: 50,
      height: 100,
      speed: 7,
      health: 100,
      attack: 5,
      range: 50,
      velX: 0,
      velY: 0,
      jumping : false,
      grounded: false,
      lastDir: "r",
      dead: false,
      kills: 0
    },
    player2 = {
      x: (width * 0.75 - 50),
      y: height - 100,
      width: 50,
      height: 100,
      speed: 7,
      health: 100,
      attack: 5,
      range: 50,
      velX: 0,
      velY: 0,
      jumping: false,
      grounded: false,
      lastDir: "l",
      dead: false,
      kills: 0
    },
    keys = [],
    friction = 0.9,
    gravity = 0.66;
 
canvas.width = width;
canvas.height = height;

// load sounds
var sound = new Array();
    sound[0] = new Audio('https://jonkantner.com/experiments/stick_fight/sounds/hit.ogg');
    sound[1] = new Audio('https://jonkantner.com/experiments/stick_fight/sounds/miss.ogg');

var frameRP1 = 1,
    frameRP2 = 1,
    frameLP1 = 11,
    frameLP2 = 11,
    frameLPunchP1 = 37,
    frameLPunchP2 = 37,
    frameRPunchP1 = 26,
    frameRPunchP2 = 26,
    maxFrames = 74,
    player1Sprites = new Array(maxFrames),
    player2Sprites = new Array(maxFrames),
    anim1,
    anim2,
    deathTime = 0,
    healthP1 = document.getElementById('p1-health'),
    healthP2 = document.getElementById('p2-health');

