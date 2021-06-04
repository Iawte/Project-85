var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var car1X = 10;
var car1Y = 10;
var car2X = 10;
var car2Y = 100;
var car1width = 100;
var car1height = 90;
var car2width = 100;
var car2height = 90;
var bgImg = "racing.jpg";
var car1Img = "car1.png";
var car2Img = "car1.png";

function add() {
    bgImgTag = new Image();
    bgImgTag.onload = uploadBg;
    bgImgTag.src = bgImg;
    car1ImgTag = new Image();
    car1ImgTag.onload = uploadcar1;
    car1ImgTag.src = car1Img;
    car2ImgTag = new Image();
    car2ImgTag.onload = uploadcar2;
    car2ImgTag.src = car2Img;
}

function uploadBg() {
    ctx.drawImage(bgImgTag, 0, 0, canvas.width, canvas.height);
}


function uploadcar1() {
    ctx.drawImage(car1ImgTag, car1X, car1Y, car1width, car1height);
}

function uploadcar2() {
    ctx.drawImage(car2ImgTag, car2X, car2Y, car2width, car2height);
}

window.addEventListener("keydown", keydownFunction);

function keydownFunction(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "37") {
        console.log("car1left")
        car1left();
    }

    if (keyPressed == "38") {
        console.log("car1up")
        car1up()
    }
    if (keyPressed == "39") {
        console.log("car1right")
        car2right()
    }
    if (keyPressed == "40") {
        console.log("car1down")
        car2down()
    }

    if (keyPressed == "37") {
        console.log("car2left")
        car2left();
    }

    if (keyPressed == "38") {
        console.log("car2up")
        car2up()
    }
    if (keyPressed == "39") {
        console.log("car2right")
        car2right()
    }
    if (keyPressed == "40") {
        console.log("car2down")
        car2down()
    }
}

function car1up() {
    if (car1Y >= 0) {
        car1Y -= 10
        uploadBg();
        uploadcar1();
        uploadcar2();
    }
}
function car2up() {
    if (car2Y >= 0) {
        car2Y -= 10
        uploadBg();
        uploadcar1();
        uploadcar2();
    }
}

function car1down() {
    if (car1Y <= 600) {
        car1Y=car1Y+10
        uploadBg();
        uploadcar1();
        uploadcar2();
    }
}

function car2down() {
    if (car2Y <=600 ) {
        car2Y=car2Y+10
        uploadBg();
        uploadcar1();
        uploadcar2();
    }
}
function car1left() {
    if (car1X >= 0) {
        car1X -=10
        uploadBg();
        uploadcar1();
        uploadcar2();
    }
}
function car2left() {
    if (car2X >= 0) {
        car2X -= 10
        uploadBg();
        uploadcar1();
        uploadcar2();
    }
}
function car1right() {
    if (car1X <= 600) {
        car1X += 10
        uploadBg();
        uploadcar1();
        uploadcar2();
    }
}
function car2right() {
    if (car2X <= 600) {
        car2X += 10
        uploadBg();
        uploadcar1();
        uploadcar2();
    }
}






