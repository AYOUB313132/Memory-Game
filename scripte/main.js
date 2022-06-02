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
    ]
    // shuffle Array 
    // let gameBlock = document.getElementById('images').children;

//         let otro = Array.from(gameBlock)

//         // let one = [...Array(gameBlock.length).keys()]
//         // let one = Array.from(Array(gameBlock.length).keys())
//         let one = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//         console.log(one)
//         shuffle(one)
//         console.log(one)

//         function shuffle(arr) {
//             let current = arr.length,
//                 random,
//                 temporal;
//             while (current > 0) {
//                 random = Math.floor(Math.random() * current);
//                 current--;
//                 temporal = arr[current]
//                 arr[current] = arr[random]
//                 arr[random] = temporal

//             }

//             return arr;

//         }
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
        $('.text').remove();
        $('#game-blocks').addClass('grid')
        for (let i = 0; i < emoji.length; i++) {
            $('#game-blocks').append('<div class="game-block hide"><div class="face front">?</div><div class="face back"><img id="back" src="" alt=""></div></div>')
        }

        $('img').map(function(e) {
            let imgSrc = emoji[e];
            $(this).attr('src', imgSrc);
            $(this).parents('.game-block').attr('data-tech', imgSrc.slice(6, -4));
        })
        $('#game-blocks .game-block').fadeIn(2000)


        let gameBlocks = $('#game-blocks').children()
        gameBlocks.each(function() {
            $(this).on('click', function() {
                $(this).addClass('flipped')
                let classChecked = $(this).hasClass('flipped')

            })

        })
        $('#game-blocks').children().each(function() {
            let classChecked = $(this).hasClass('flipped')
            $(this).filter(function() {
                $(this).on('click', function() {
                    if ($(this).hasClass('flipped')) {
                        console.log($(this).length)
                    } else {
                        console.log('no')
                    }
                })

            })
        })






    });











})
































// let random = Array.from({ length: 5 }, () => Math.floor(Math.random() * 5));