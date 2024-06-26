function loadKeyboardListener() {
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 13) {
            enterKey = true;
        }

        if (event.keyCode == 68) {
            d = true;
        } else if (event.keyCode == 65) {
            a = true;
        }        

        if (event.keyCode == 74) {
            j = true;
        }

        if (event.keyCode == 75) {
            k = true;
        }

        if (event.keyCode == 76) {
            l = true;
        }

        if (event.keyCode == 83) {
            s = true;
        }

        if (event.keyCode == 87) {
            w = true;
        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.keyCode == 13) {
            enterKey = false;

            DebugMod = !DebugMod;
        }

        if (event.keyCode == 68) {
            d = false;
        } else if (event.keyCode == 65) {
            a = false;
        }

        if (event.keyCode == 74) {
            j = false;
        }

        if (event.keyCode == 75) {
            k = false;
        }

        if (event.keyCode == 76) {
            l = false;
        }

        if (event.keyCode == 83) {
            s = false;
        }

        if (event.keyCode == 87) {
            w = false;
        }
    });
}

function loadMouseListener () {
    document.addEventListener(`mousemove`, (event) => {
        mouseX = event.clientX;

        mouseY = event.clientY;
    });

    document.addEventListener(`mousedown`, () => {
        mouseClick = true;
    });

    document.addEventListener(`dblclick`, () => {
        mouseDBClick = true;
    });

    document.addEventListener(`mouseup`, () => {
        mouseClick = false;
        mouseDBClick = false;
    });
}

loadKeyboardListener();
loadMouseListener();