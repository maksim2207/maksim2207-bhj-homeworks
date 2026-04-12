let clickerCounter = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");
let isLarge = true;

image.onclick = function() {
    clickerCounter.textContent++;

    if (isLarge) {
      image.width = 250;
      image.height = 150;
    } else {
      image.width = 200;
      image.height = 127;
    }

    isLarge = !isLarge;
};

