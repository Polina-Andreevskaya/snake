
var drawModule = (function() {

    var food = true,
        body = false,
        fieldWidth = 640,
        fieldHeight = 480,
        cellSide = 16,
        width = fieldWidth/cellSide,
        height = fieldHeight/cellSide,
        field = document.getElementById('field'),
        context  = field.getContext('2d'),
        scoreEl = document.getElementById('score'),
        scoreCont = document.getElementById('score-container'),
        score = 0,
        head,
        snake,
        foodCoord,
        loop,
        tail;

    field.width = fieldWidth;
    field.height = fieldHeight;

    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function clearAll() {
        context.clearRect(0, 0, fieldWidth, fieldHeight);
    };

    function snakeDraw(snake) {
        for (var i = 0; i < snake.length; i++) {
            cellDraw(body, snake[i].x, snake[i].y);
        }
    };

    function checkCoordinates(x, y, flag) {
        if (flag) {
            var k = 1;
        }
        else {
            k = 0;
        }
        for (var i = k; i < snake.length; i++) {
            if ((x === snake[i].x) && (y === snake[i].y)) {
                return false;
            }
        }
        return true;
    };

    function cellDraw(flag, x, y) {
        if (flag) { //food
            context.fillStyle = 'red';
            if ((x === undefined) || (y === undefined)) {
                x = getRandomInt(0, width - 1);
                y = getRandomInt(0, height - 1);
            }
            if (checkCoordinates(x, y)) {
                foodCoord.x = x;
                foodCoord.y = y;
            }
            else {
                cellDraw(food);
            }
        }
        else { //snake
            context.fillStyle = 'yellow';
        }
        context.fillRect(x * cellSide, y * cellSide, cellSide, cellSide);
        context.fillStyle = 'black';
        context.strokeRect(x * cellSide, y * cellSide, cellSide, cellSide);
    };


    function draw() {
        if (pause) {
            return;
        }
        clearAll();
        cellDraw(food, foodCoord.x, foodCoord.y);
        snakeDraw(snake);
        scoreEl.textContent = score;

        switch(direction) {
            case left:
                head.x--;
                break;
            case right:
                head.x++;
                break;
            case up:
                head.y--;
                break;
            case down:
                head.y++;
                break;

        }


        if ((head.x === foodCoord.x) && (head.y === foodCoord.y)) {
            score++;
        }
        else {
            snake.pop();
        }
        tail = {
                x: head.x,
                y: head.y
            };
        snake.unshift(tail);


        head.x = snake[0].x;
        head.y = snake[0].y;

        if ((head.x < 0)|| (head.x > width - 1) || (head.y < 0) || (head.y > height - 1) || (!checkCoordinates(head.x, head.y, true))) {
            loop = clearInterval(loop);
            startButton.classList.remove('hidden');
        }

    };






    var init = function() {
        clearAll();
        snake = [
            {x: 0, y: 0},
            {x: 1, y: 0},
        ];
        head = {
            x: 0,
            y:0
        };

        direction = right;
        foodCoord = {};
        score = 0;
        scoreCont.classList.remove("hidden");

        loop = setInterval(draw, 100);
    };



    return {
        init: init
    };
})();
