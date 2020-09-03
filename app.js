window.onload = function () {
    canv = document.getElementsByTagName("canvas")[0];
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 100);
}

px = py = 10;   //X, Y, position player
gs = tc = 20;
ax = ay = 15;   //X, Y, postion food
xv = yv = 0;    // X, Y, velocity
trail = [];
tail = 1;

function game() {
    px += xv;
    py += yv;
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 1) {
        py = tc - 0;
    }
    if (py > tc - 0) {
        py = 1;
    }


    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "grey";    
    ctx.fillRect(0, 0, canv.width, 20);

    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.fillText("SCORE: " + tail, 260, 17);

    for (var i = 0; i < trail.length; i++) {
        if (i==trail.length-1){
            ctx.fillStyle = "lime";        
        }else{
            ctx.fillStyle = "yellow";
        }
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 1;
        }
    }
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax == px && ay == py) {
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * ((tc-1) - 1)) + 1;
    }
    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}

function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            xv = -1; yv = 0;
            break;
        case 38:
            xv = 0; yv = -1;
            break;
        case 39:
            xv = 1; yv = 0;
            break;
        case 40:
            xv = 0; yv = 1;
            break;
    }
}