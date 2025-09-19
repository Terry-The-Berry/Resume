

/* Learned how to do this from here:
https://stackoverflow.com/questions/49402471/how-to-use-javascript-variables-in-css
Pretty nifty!*/
var root = document.querySelector(':root');

const parallaxInterval = setInterval(parallaxBG,0);

function parallaxBG(){
    root.style.setProperty('--bgpos', `${window.pageYOffset*-0.25}px`);
}