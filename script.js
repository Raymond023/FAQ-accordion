'use strict';

const plusBtn = $('.plus');
const minusBtn = $('.minus');
const h2Tag = $('h2');




function handlePlusBtnEvent () {
    $(this).hide();
    $(this).siblings('.minus').show();
    $(this).parent().siblings('p').slideDown();
}

function handleMinusBtnEvent () {
    $(this).hide();
    $(this).siblings('.plus').show();
    $(this).parent().siblings('p').slideUp();
}

function handleEvent () {
    $(this).parent().find('.plus, .minus').toggle();
    $(this).parent().siblings('p').slideToggle();    
}

h2Tag.on('keydown', function (event) {
    
    if(event.code === "Space") {
        $(this).parent().find('.plus, .minus').toggle();
        $(this).parent().siblings('p').slideToggle();
    }    
})

plusBtn.click(handlePlusBtnEvent);
minusBtn.click(handleMinusBtnEvent);
h2Tag.click(handleEvent);
//h2Tag.keydown(handleKeydownEvent);