canvas = document.createElement(`canvas`);

document.body.appendChild(canvas);

canvas.width = 2545;
canvas.height = 1425;

let ctx = canvas.getContext(`2d`);

let w = false, a = false, s = false, d = false, j = false, k = false, m = false, mouseClick = false;

function loadPlayerImage() {
    Test = new Image();
    Test.src = 'Test.png'
}

let keysDown = {};
function setKeyboardListener() {
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 87) {
        
        }
    });
    document.addEventListener('keyup', function (event) {
        if (event.keyCode == 87) {
            
        }
    });
}

ctx.drawImage(Test, 1, 1, 1, 1, 10, 10, 128, 128);