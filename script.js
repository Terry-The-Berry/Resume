

/* Learned how to do this from here:
https://stackoverflow.com/questions/49402471/how-to-use-javascript-variables-in-css
Pretty nifty!*/
var root = document.querySelector(':root');
var showNav = false;

// Runs on site load
document.addEventListener('DOMContentLoaded', function() {
  setScreenMode();
});


window.addEventListener('scroll', function(){
    /* set background image position */
    root.style.setProperty('--bgposY', `${window.pageYOffset*-0.25}px`);
    root.style.setProperty('--mgposY', `${window.pageYOffset*-0.35}px`);
    root.style.setProperty('--fgposY', `${window.pageYOffset*-0.45}px`);

    let header = document.getElementById("head");

    if (window.pageYOffset>500) {
        header.classList.remove("clear");
    } else {
        header.classList.add("clear");
    }
});



window.addEventListener('resize', function() {
    setScreenMode();
});

function setScreenMode(){
    let doc = document.getElementById("html")
    if(window.innerWidth/window.innerHeight < 1) {
        doc.classList.add("mobile");
    } else{
        doc.classList.remove("mobile");
    }
}


function toggleSidebar(){

    if(showNav) {
        showNav=false;
        root.style.setProperty('--titleDisplay', `visible`);
        root.style.setProperty('--navDisplay', `none`);
        document.getElementById("name").style.marginRight="0vw";
    } else {
        showNav=true;
        root.style.setProperty('--titleDisplay', `hidden`);
        root.style.setProperty('--navDisplay', `flex`);
        document.getElementById("name").style.marginRight="-85vw";
    }
}