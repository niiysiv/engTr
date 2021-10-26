'use strict';



let popupImage = function()
{
    let popup = document.getElementById("js-popup");
    if(!popup) return;

    let blackBg = document.getElementById("js-black-bg"); 
    let closeBtn = document.getElementById("js-close-btn");
    let showBtn = document.getElementById("js-show-popup");

    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);

    function closePopUp(elem) 
    {
        if(!elem) return;
        elem.addEventListener('click', function() 
        {
        popup.classList.toggle('is-show');
        });
    }
}
popupImage();

$(function()
{
    $('div').hide().fadeIn(1000)
});
