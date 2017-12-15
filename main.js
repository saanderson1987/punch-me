const image = document.getElementById('image');

const imagesSrc = {
  center: 'images/center.jpg',
  left1: 'images/left1.jpg',
  left2: 'images/left2.jpg',
  right1: 'images/right1.jpg',
  right2: 'images/right2.jpg',
  up1: 'images/up1.jpg',
  up2: 'images/up2.jpg',
};

// gest.options.debug(true);

gest.start();

gest.options.sensitivity(100);


gest.options.subscribeWithCallback(function(gesture) {
  if (gesture.left) {
    console.log('left11');
    image.src = imagesSrc.left1;
    animate(imagesSrc.left2, imagesSrc.left1, imagesSrc.center);
  }
  if (gesture.right) {
    console.log('right');
    image.src = imagesSrc.right1;
    animate(imagesSrc.right2, imagesSrc.right1, imagesSrc.center);

  }
  if (gesture.up) {
    console.log('up');
    image.src = imagesSrc.up1;
    animate(imagesSrc.up2, imagesSrc.up1, imagesSrc.center);

  }
});



function animate(...frames) {
  let i = 0;

  nextFrame(setImage);

  function setImage() {
    image.src = frames[i];
    if (frames[i + 1]) {
      i++;
      nextFrame(setImage);
    }
  }

  function nextFrame(func) {
    setTimeout(func, 115);
  }

}
