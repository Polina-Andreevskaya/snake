
(function (drawModule){

    var LEFT = 37,
        RIGHT = 39,
        UP = 38,
        DOWN = 40,
        PAUSE = 80,
        code;

    startButton.addEventListener("click", function () {
        startButton.classList.add('hidden-btn');
        drawModule.init();

    });

    document.body.onkeydown = function(event) {
        event = event || window.event;
        if (event.keyCode === UP || event.keyCode === DOWN || event.keyCode === LEFT || event.keyCode === RIGHT) {
            return false;
        }
    };

    document.onkeydown = function(event) {
        code = event.keyCode;
        switch (code) {
            case LEFT:
                if (direction != right) {
                    direction = left;
                    pause = false;
                }
                break;

            case RIGHT:
                if (direction != left) {
                    direction = right;
                    pause = false;
                }
                break;

            case UP:
                if (direction != down) {
                    direction = up;
                    pause = false;
                }
                break;

            case DOWN:
                if (direction != up) {
                    direction = down;
                    pause = false;
                }
                break;
            case PAUSE:
                pause = !pause;
                break;
        }
    };

})(drawModule);

