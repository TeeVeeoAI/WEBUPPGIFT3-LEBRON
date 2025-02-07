let html = document.getElementsByTagName('html')[0];
let mane = document.getElementById('måne');
let sol = document.getElementById('sol');

function ToggleThemeD(){
    html.classList.toggle('theme-dark');
    mane.style.display = "none";
    sol.style.display = "block";
}
function ToggleThemeL(){
    html.classList.toggle('theme-dark');
    mane.style.display = "block";
    sol.style.display = "none";
}