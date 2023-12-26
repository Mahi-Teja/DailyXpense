
let hamMenu= document.querySelector(".ham-menu");
let menuList = document.querySelector(".nav-list")
let closeIcon = document.querySelector(".btn-close");
const body = document.body;

function openMenu(){
    // ham-iconclick -> show nav-list and hide ham-menu
    menuList.classList.remove("no-display")
    hamMenu.classList.add('no-display')
    body.classList.toggle('no-scroll');
    
}
function closeMenu(){
    // X-icon click -> hide nav-list and show ham-icon
    menuList.classList.add("no-display")
    hamMenu.classList.remove('no-display')
    body.classList.toggle('no-scroll');

}
hamMenu.addEventListener("click",openMenu)//Menu Clicked
closeIcon.addEventListener("click",closeMenu)//Close Clicked
