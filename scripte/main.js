let myImg = document.getElementsByTagName('#back')
let star = document.getElementById('star')
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
    ]
    // shuffle Array 

// getShuffledArr = arr => {
//     const newArr = arr.slice()
//     console.log(newArr)
//     for (let i = newArr.length - 1; i > 0; i--) {
//         const rand = Math.floor(Math.random() * (i + 1));
//         [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
//     }
//     return newArr
// };
// let finaleImage = getShuffledArr(img)

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

// for (let i = 0; i < finaleImage.length; i++) {
//     myImg[i].setAttribute('src', finaleImage[i])
// }

$(document).ready(() => {
    $('.level-1').click(function() {
        $('.text').hide();
        $('.images').addClass('grid')
        for (let i = 0; i < emoji.length; i++) {
            $('.images').append('<div class="game-block hide" data-tech=""><div class="face front">?</div><div class="face back"><img id="back" src="" alt=""></div></div>')
        }

        $('img').map(function(e) {
            let imgSrc = emoji[e]
            $(this).attr('src', imgSrc)
        })
        $('.images .game-block').fadeIn(2000)

    });



})
































// let random = Array.from({ length: 5 }, () => Math.floor(Math.random() * 5));