
(function (drawModule){

    var code;
    startButton.addEventListener("click", function () {
        startButton.classList.add('hidden-btn');
        drawModule.init();

    });

    document.onkeydown = function(event) {
        code = event.keyCode;
        switch (code) {
            case 37:
                if (direction != right) {
                    direction = left;
                }
                break;

            case 39:
                if (direction != left) {
                    direction = right;
                }
                break;

            case 38:
                if (direction != down) {
                    direction = up;
                }
                break;

            case 40:
                if (direction != up) {
                    direction = down;
                }
                break;
        }
    };

})(drawModule);
