const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");
const navBar = document.getElementById("nav");


function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        darkmode();
    }else{
        document.documentElement.setAttribute('data-theme','light')
        lightmode();
    }
}

function darkmode(){
    toggleIcon.children[0].textContent = "โหมดกลางคืน";
    toggleIcon.children[1].classList.replace("fa-sun","fa-moon");
    navBar.style.backgroundColor = 'rgb(0 0 0 / 50%)'
}
function lightmode(){
    toggleIcon.children[0].textContent = "โหมดกลางวัน"
    toggleIcon.children[1].classList.replace("fa-moon","fa-sun");
    navBar.style.backgroundColor = 'rgb(255 255 255 / 50%)'
}
switchToggle.addEventListener("change",switchMode);