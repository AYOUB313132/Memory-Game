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

$(document).ready(() => {
    $('#level-1').click(function() {

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
        $('#game-blocks .game-block').fadeIn(2000)
        const audio = new Audio("/sound/mixkit-fun-times-7.mp3");
        audio.play();

        let gameBlocks = $('#game-blocks').children()
        gameBlocks.each(function(e) {
            $(this).on('click', function(e) {
                $(this).addClass('flipped')
                var classList = $('.flipped')

                chekblocks(classList)
            })
        })
    })
})

function chekblocks(classList) {
    if (!classList || classList.length < 2) {
        return;
    } else if (classList && classList.length == 2) {

        var first = classList.first().get(0);
        var second = classList.last().get(0);
        console.log(first, second)
        if (first && second && first.dataset.tech === second.dataset.tech) {
            //set equal class
            first.classList.add('egual');
            second.classList.add('egual');
            //remove hide class 
            //first.classList.remove('hide');
            //second.classList.remove('hide');
        }
    }
    resetClass()
}

function resetClass() {
    setTimeout(function() {
        //jquery
        $('.game-block.flipped').removeClass('flipped');
        //purejs 
        //Array.from(document.querySelectorAll('.game-block.flipped')).forEach((el) => el.classList.remove('flipped'));
    }, 1000)

}




// let random = Array.from({ length: 5 }, () => Math.floor(Math.random() * 5));