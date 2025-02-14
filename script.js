function ToggleThemeD(){
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('theme-light');
    document.getElementById('måne').style.display = "none";
    document.getElementById('sol').style.display = "block";
}
function ToggleThemeL(){
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('theme-light');
    document.getElementById('måne').style.display = "block";
    document.getElementById('sol').style.display = "none";
}

function FormCheck(){
    if (document.getElementById('TAC').checked){
        document.getElementById('form').removeAttribute('disabled');
    }
    else {
        document.getElementById('form').setAttribute('disabled', true)
    }
}
let score = 0;
let add = 1;

function LebronClicker(){
    if(score == 10){
        add++;
    }
    score += add;
    document.getElementById('score').innerHTML = "score: " + score;
    if(score == 100){
        alert('You win!!!!');
    }
    if(score == 1000){
        alert('You extra win!!!! (Sponsore by Jetmir)')
    }
}