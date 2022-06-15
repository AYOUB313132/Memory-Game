/* =========== Array Images =========== */
let fruitImg = [
    "images/fruits/fruit-1.png",
    "images/fruits/fruit-2.png",
    "images/fruits/fruit-3.png",
    "images/fruits/fruit-4.png",
    "images/fruits/fruit-5.png",
    "images/fruits/fruit-6.png",
    "images/fruits/fruit-7.png",
    "images/fruits/fruit-8.png",
    "images/fruits/fruit-1.png",
    "images/fruits/fruit-2.png",
    "images/fruits/fruit-3.png",
    "images/fruits/fruit-4.png",
    "images/fruits/fruit-5.png",
    "images/fruits/fruit-6.png",
    "images/fruits/fruit-7.png",
    "images/fruits/fruit-8.png",

];
let cartoonImg = [
    "images/cartoon/cart-01.png",
    "images/cartoon/cart-02.png",
    "images/cartoon/cart-03.png",
    "images/cartoon/cart-04.png",
    "images/cartoon/cart-05.png",
    "images/cartoon/cart-06.png",
    "images/cartoon/cart-07.png",
    "images/cartoon/cart-08.png",
    "images/cartoon/cart-09.png",
    "images/cartoon/cart-10.png",
    "images/cartoon/cart-11.png",
    "images/cartoon/cart-12.png",
    "images/cartoon/cart-01.png",
    "images/cartoon/cart-02.png",
    "images/cartoon/cart-03.png",
    "images/cartoon/cart-04.png",
    "images/cartoon/cart-05.png",
    "images/cartoon/cart-06.png",
    "images/cartoon/cart-07.png",
    "images/cartoon/cart-08.png",
    "images/cartoon/cart-09.png",
    "images/cartoon/cart-10.png",
    "images/cartoon/cart-11.png",
    "images/cartoon/cart-12.png"
];
let technologyImg = [
    "images/technology/tech-01.png",
    "images/technology/tech-02.png",
    "images/technology/tech-03.png",
    "images/technology/tech-04.png",
    "images/technology/tech-05.png",
    "images/technology/tech-06.png",
    "images/technology/tech-07.png",
    "images/technology/tech-08.png",
    "images/technology/tech-09.png",
    "images/technology/tech-10.png",
    "images/technology/tech-11.png",
    "images/technology/tech-12.png",
    "images/technology/tech-13.png",
    "images/technology/tech-14.png",
    "images/technology/tech-15.png",
    "images/technology/tech-01.png",
    "images/technology/tech-02.png",
    "images/technology/tech-03.png",
    "images/technology/tech-04.png",
    "images/technology/tech-05.png",
    "images/technology/tech-06.png",
    "images/technology/tech-07.png",
    "images/technology/tech-08.png",
    "images/technology/tech-09.png",
    "images/technology/tech-10.png",
    "images/technology/tech-11.png",
    "images/technology/tech-12.png",
    "images/technology/tech-13.png",
    "images/technology/tech-14.png",
    "images/technology/tech-15.png"
];
/* ===================== FUNCTION SHUFFLE ===================== */
function customShuffle(x) {
    var y = x.slice(1, x.length - 1);
    var j, t, i;
    for (i = y.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        t = y[i];
        y[i] = y[j];
        y[j] = t;
    }
    return [x[0]].concat(y).concat(x[x.length - 1]);
}
let fruit = customShuffle(fruitImg)
let technology = customShuffle(technologyImg)
let cartoon = customShuffle(cartoonImg)

/* ===================== STAR jQuery ===================== */
$(document).ready(() => {
    let soundStar = document.getElementById('sound')

    function playAudio() {
        soundStar.play();
      }
    function pauseAudio() {
        soundStar.pause();
    }
    /*++++++++ Add Sound ++++++++*/

    // let soundStar = new Audio("/sound/mixkit-fun-times-7.mp3");
    // let soundVictory = new Audio('/sound/sfx-victory6.mp3');
    // let faild = new Audio('/sound/mixkit-game-show-wrong-answer-buzz-950.wav');

    /*++++++++ write Name ++++++++*/
    $('#popup').fadeIn(1500)
    $('#close-popup').click(function(){
        let name = $('#write-name').val()
        $(this).parents('#popup').fadeOut(1500)
        $(this).parents('#popup').siblings('.overlay').fadeOut(1500)
        
        if (name == ''){
            $('#name').text('Hello Unknown')
            $('#name').slideDown(1500)
    
        }else{
            $('#name').html('<strong>Hello<strong> ' + name)
            $('#name').slideDown(1500)
        }
    })
    /*++++++++ Chose Livel  ++++++++*/
    $('button').click(function() {
            if ($(this).text() == 'Level 1') {
                $('#star').removeClass('stop-click hide')
                $('#game-blocks').children().remove()
                $('#game-blocks').removeClass('flex-livel-2 flex-livel-3')
                $('.text').remove();
                $('#game-blocks').addClass('flex-livel-1')
                for (let i = 0; i < fruit.length; i++) {
                    $('#game-blocks').append('<div class="game-block hide"><div class="face front">?</div><div class="face back"><img id="back" src="" alt=""></div></div>')
                }

                $('img').map(function(e) {
                    let imgSrc = fruit[e];
                    $(this).attr('src', imgSrc);
                    $(this).parents('.game-block').attr('data-tech', imgSrc);
                })
                $('#game-blocks .game-block').slideDown(1000)
                $('#timer').slideDown(1000)
            } else if ($(this).text() == 'Level 2') {
                $('#star').removeClass('stop-click hide')
                $('#game-blocks').children().remove()
                $('#game-blocks').removeClass('flex-livel-1 flex-livel-3')
                $('.text').remove();
                $('#game-blocks').addClass('flex-livel-2')
                for (let i = 0; i < cartoon.length; i++) {
                    $('#game-blocks').append('<div class="game-block hide"><div class="face front">?</div><div class="face back"><img id="back" src="" alt=""></div></div>')
                }

                $('img').map(function(e) {
                    let imgSrc = cartoon[e];
                    $(this).attr('src', imgSrc);
                    $(this).parents('.game-block').attr('data-tech', imgSrc);
                })
                $('#game-blocks .game-block').slideDown(1000)
                $('#timer').slideDown(1000)
            } else if ($(this).text() == 'Level 3') {
                $('#star').removeClass('stop-click hide')
                $('#game-blocks').removeClass('flex-livel-1 flex-livel-2')
                $('#game-blocks').children().remove()
                $('.text').remove();
                $('#game-blocks').addClass('flex-livel-3')
                for (let i = 0; i < technology.length; i++) {
                    $('#game-blocks').append('<div class="game-block hide"><div class="face front">?</div><div class="face back"><img id="back" src="" alt=""></div></div>')
                }

                $('img').map(function(e) {
                    let imgSrc = technology[e];
                    $(this).attr('src', imgSrc);
                    $(this).parents('.game-block').attr('data-tech', imgSrc);
                })
                $('#game-blocks .game-block').slideDown(1000)
                $('#timer').slideDown(1000)
            }
        })
        /*++++++++ Star Gaming  ++++++++*/

    $('#star').click(function() {
        // $('#star').play()
        //soundStar.play();
        
        playAudio();
        $('#level').addClass('stop-click')
        $('#click').slideDown(1000)
        let timer = setInterval(chronometre, 10)
        let gameBlocks = $('#game-blocks').children()
        let classEgual = $('.egual')
        gameBlocks.each(function(e) {
            $(this).on('click', function(e) {
                $(this).addClass('flipped')
                var classList = $('.flipped')
                chekblocks(classList)
                if ($('.egual').length == gameBlocks.length) {
                    let timeEnd = $('#timer').text()
                    clearInterval(timer)
                    $('#timer').text('00:00:00')
                    $('#game-blocks').children().fadeOut(800)
                    $('#game-blocks').append('<div class="feli"><div><strong>Great<strong><i class="fa-solid fa-face-smile-wink"></i><i class="fa-solid fa-hands-clapping"></i></div><div>You Finished the game in: <strong>' + timeEnd + '</strong></div><div>You have clicked: <strong>' + click + '</div>')
                    $('#game-blocks').removeClass('flex-livel-1 flex-livel-2 flex-livel-3')
                    $('#star').addClass('hide')
                    pauseAudio()
                }
            })
        })
    })
    $('#restar').click(() => {
        location.reload();
    })

})
let click = 0;

function chekblocks(classList) {

    if (!classList || classList.length < 2) {
        return;
    } else if (classList && classList.length == 2) {
        $('#click').text('Number of click : ' + ++click)
        var first = classList.first().get(0);
        var second = classList.last().get(0);
        if (first && second && first.dataset.tech === second.dataset.tech) {
            //set equal class
            first.classList.add('egual');
            second.classList.add('egual');
            // const succes = new Audio('/sound/success-sound-effect.mp3')
            // succes.play()
            
        }
    }
    resetClass()
}

function resetClass() {
    setTimeout(function() {
        //jquery
        $('.game-block.flipped').removeClass('flipped');

        faild.play()
            //purejs 
            //Array.from(document.querySelectorAll('.game-block.flipped')).forEach((el) => el.classList.remove('flipped'));
    }, 1000)

}


/* ===================== FUNCTION CHRONOMETRE ===================== */

let time = document.getElementById('timer')
let counter = 0;
let seconde = 0;
let minute = 0;

function chronometre() {
    counter++;
    if (counter > 99) {
        counter = 0;
        time.textContent = (minute + ':' + ++seconde + ':' + counter);
    } else if (counter < 10) {
        time.textContent = ('0' + minute + ':' + '0' + seconde + ':' + '0' + counter);
    } else if (seconde > 59) {
        seconde = 0;
        time.textContent = ('0' + ++minute + ':' + seconde + ':' + counter);
    } else if (seconde < 10) {
        time.textContent = ('0' + minute + ':' + '0' + seconde + ':' + counter);
    } else if (minute < 10) {
        time.textContent = ('0' + minute + ':' + seconde + ':' + counter);
    } else {
        time.textContent = (minute + ':' + seconde + ':' + counter);
    }
}



// let random = Array.from({ length: 5 }, () => Math.floor(Math.random() * 5));