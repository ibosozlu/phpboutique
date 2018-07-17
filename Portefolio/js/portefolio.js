        // smoothscroll

        $(function() {
        $(document).ready(function() {
            $('.js-scrollTo').on('click', function() { // Au clic sur un élément
                var page = $(this).attr('href'); // Page cible
                var speed = 350; // Durée de l'animation (en ms)
                $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
                return false;
            });
        });
        });
        // Progress bar CSS HTML


 




        function move0(niveau) {
            var elem = document.getElementById("myBar0"); 
            var width = 10;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= niveau) {
                    clearInterval(id);
                } else {
                    width++; 
                    elem.style.width = width + '%'; 
                    elem.innerHTML = width * 1 + '%';
                }
            }
        }
        // Progress bar JAVA
        function move1(niveau) {
            var elem = document.getElementById("myBar1"); 
            var width = 10;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= niveau) {
                    clearInterval(id);
                } else {
                    width++; 
                    elem.style.width = width + '%'; 
                    elem.innerHTML = width * 1 + '%';
                }
            }
        }

        // Progress bar PHP
        function move2(niveau) {
            var elem = document.getElementById("myBar2"); 
            var width = 10;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= niveau) {
                    clearInterval(id);
                } else {
                    width++; 
                    elem.style.width = width + '%'; 
                    elem.innerHTML = width * 1 + '%';
                }
            }
        }
        // Progress bar AUTRE
        function move3(niveau) {
            var elem = document.getElementById("myBar3"); 
            var width = 10;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= niveau) {
                    clearInterval(id);
                } else {
                    width++; 
                    elem.style.width = width + '%'; 
                    elem.innerHTML = width * 1 + '%';
                }
            }
        }


        xyz = 1
        
        $( window ).scroll(function() {
            var yza = window.scrollY;
            console.log(yza);

            if (yza > 1600 && xyz == 1){
                $( "#myProgress" ).append(move0(100));
                $( "#myProgress" ).append(move1(75));
                $( "#myProgress" ).append(move2(30));
                $( "#myProgress" ).append(move3(60));
                xyz = 0;
          }
    })
       





        // Initialisation des variables globales
        var width = 100,
        height = 100,
        ratio = window.devicePixelRatio;
    var x = width,
        r = 5,
        step = 0,
        vx = r * 0.2;
    var sprites = new Image();
    sprites.onload = animate;
    sprites.src = "sprite.png";
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    canvas.width  = width  * ratio;
    canvas.height = height * ratio;
    canvas.style.width  = width  + "px";
    canvas.style.height = height + "px";
    context.scale(ratio, ratio);
    context.imageSmoothingEnabled = false;
    context.fillStyle = "rgba(245, 245, 245, 0.753)";
    function animate() {
        draw();
        update();
        requestAnimationFrame(animate);
    }
    function draw() {
        context.fillRect(0, 0, width, height);
        
        // Affichage
        drawShell(x, height, r, Math.floor(step));
    }
    function drawShell(x, y, r, step) {
        var s = r/12;
        
        context.drawImage(sprites, 256*step, 0, 256, 256, x - 256*s, y - 256*s, 256*s, 256*s);
    }
    function update() {
     
        step += 0.15;
        if (step >= 5)
            step -= 5;
    }




   

