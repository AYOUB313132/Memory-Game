/* =========== Array Images =========== */
let EmojiImg = [
    "image/logo-1.png",
    "image/logo-2.png",
    "image/logo-3.png",
    "image/logo-4.png",
    "image/logo-5.png",
    "image/logo-6.png",
    "image/logo-7.png",
    "image/logo-8.png",
    "image/logo-9.png",
    "image/logo-10.png",
    "image/logo-1.png",
    "image/logo-2.png",
    "image/logo-3.png",
    "image/logo-4.png",
    "image/logo-5.png",
    "image/logo-6.png",
    "image/logo-7.png",
    "image/logo-8.png",
    "image/logo-9.png",
    "image/logo-10.png",
];
let cartonne = [];
let technology = [];
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
let emoji = customShuffle(EmojiImg)

/* ===================== STAR jQuery ===================== */
$(document).ready(() => {
    let soundStar = new Audio("/sound/mixkit-fun-times-7.mp3");
    let soundVictory = new Audio('/sound/sfx-victory6.mp3');
    const faild = new Audio('/sound/mixkit-game-show-wrong-answer-buzz-950.wav');
    let addName = prompt('write your name')
    if (addName == '' || addName == null) {
        $('#name').text('Unknown')
        $('#name').slideDown(1500)

    } else {
        $('#name').html('<strong>Hello<strong> ' + addName)
        $('#name').slideDown(1500)
    }
    $('#level-1').one('click', function() {

        $('.text').remove();
        $('#game-blocks').addClass('flex')
        for (let i = 0; i < emoji.length; i++) {
            $('#game-blocks').append('<div class="game-block hide"><div class="face front">?</div><div class="face back"><img id="back" src="" alt=""></div></div>')
        }

        $('img').map(function(e) {
            let imgSrc = emoji[e];
            $(this).attr('src', imgSrc);
            $(this).parents('.game-block').attr('data-tech', imgSrc.slice(6, -4));
        })
        $('#game-blocks .game-block').slideDown(1000)
        $('#timer').slideDown(1000)
    })


    $('#star').click(function() {
        // $('#star').play()
        soundStar.play();
        $('#click').slideDown(1000)
        let timer = setInterval(chronometre, 10)
        let gameBlocks = $('#game-blocks').children()
        let classEgual = $('.egual')
        gameBlocks.each(function(e) {
            $(this).on('click', function(e) {
                $(this).addClass('flipped')
                var classList = $('.flipped')
                chekblocks(classList)
                if ($('.egual').length == 2) {
                    let timeEnd = $('#timer').text()
                    clearInterval(timer)
                    $('#game-blocks').children().slideUp(2000)
                    $('#game-blocks').append('<div class="feli"><div><strong>Great<strong><i class="fa-solid fa-face-smile-wink"></i><i class="fa-solid fa-hands-clapping"></i></div><div>You Finished the game in: <strong>' + timeEnd + '</strong></div><div>You have clicked: <strong>' + click + '</div>')

                    soundStar.currentTime = 0
                    soundStar.pause()
                    soundVictory.play()

                }
            })
        })


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
            const succes = new Audio('/sound/success-sound-effect.mp3')
            succes.play()
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