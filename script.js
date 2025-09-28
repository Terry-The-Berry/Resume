

/* Learned how to do this from here:
https://stackoverflow.com/questions/49402471/how-to-use-javascript-variables-in-css
Pretty nifty!*/
var root = document.querySelector(':root');
var showNav = false;


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

/*
window.addEventListener('resize', function() {
    this.document.getElementById("waffle").innerHTML="TEST";
});*/

function toggleSidebar(){

    if(showNav) {
        showNav=false;
        root.style.setProperty('--titleDisplay', `visible`);
        root.style.setProperty('--navDisplay', `none`);
        document.getElementById("name").setAttribute("margin-right",``)
    } else {
        showNav=true;
        root.style.setProperty('--titleDisplay', `hidden`);
        root.style.setProperty('--navDisplay', `flex`);
    }
}