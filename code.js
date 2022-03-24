var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sam = createSprite(56, 180,20,20);
Sam.shapeColor="green"
 var Car1 = createSprite(130,180,20,20);
 Car1.shapeColor="red"
 
var Car2 = createSprite(200,180,20,20 );
 Car2.shapeColor="red"
var Car3 = createSprite(270,180,20,20);
 Car3.shapeColor="red"
var Car4 = createSprite(340,180,20,20);
 Car4.shapeColor="red"
var B1 = createSprite(200,100,400,2);
var B2 = createSprite(200,250,400,2);


Car1.velocityY=4
Car2.velocityY=-4
Car3.velocityY=4
Car4.velocityY=-4
var lives =3 ;

function draw() {
  background("white");
  
  drawSprites();
  Car1.bounceOff(B1);
  Car1.bounceOff(B2);
  
  Car2.bounceOff(B1);
  Car2.bounceOff(B2);
  
  Car3.bounceOff(B1);
  Car3.bounceOff(B2);
  
  Car4.bounceOff(B1);
  Car4.bounceOff(B2);
  
  if (keyDown("right")) {
    Sam.x+=3
    
  }
  if (keyDown("left")) {
    Sam.x-=3
  }
  if (Sam.isTouching(Car1)) {
    Sam.x=56
    Sam.y=180
  }
  if (Sam.isTouching(Car2)) {
    Sam.x=56
    Sam.y=180
  }
  if (Sam.isTouching(Car3)) {
    Sam.x=56
    Sam.y=180
  }
  if (Sam.isTouching(Car4)) {
    Sam.x=56
    Sam.y=180
  }
  
  
  
}








// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
