;(function() {
  var Game = function(canvasId) {
    var canvas = document.getElementById(convasId) ;
    var screen = canvas.getContext("2d");
    var gameSize = { x: canvas.width, y: canvas.height };

  };

  Game.prototype = {

  };

  window.onload = function() {
    new Game("screen");
  };

})();
