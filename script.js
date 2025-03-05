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

//LeClicker
let score = 0;
let add = 1;
let multiply = 1;
let auto = 0;
let price = [10, 100, 1000];
let win1 = false;
let win2 = false;

setInterval(AutoAdd, 500);

function LebronClicker(){
    score += add * multiply;
    ScoreUpdate();
    AutoUpdate();

    if(score >= 100 && !win1){
        alert('You win!!!!');
        win1 = true;
    }
    if(score >= 1000 && !win2){
        alert('You extra win!!!! (Sponsore by Jetmir)');
        win2 = true;
    }
}

function OnePlus(){
    if (score >= price[0]){
        add++;
        score -= price[0];
        price[0]++;
    }
    ScoreUpdate();
    PriceUpdate('labelOne', 0);
}

function MultiplyerPointOne(){
    if (score >= price[1]){
        multiply += 0.1;
        score -= price[1];
        price[1] += 10;
    }
    ScoreUpdate();
    PriceUpdate('labelTwo', 1);
}

function Auto(){
    if (score >= price[2]){
        auto += 0.5;
        score -= price[2];
        price[2] += 100;
    }
    ScoreUpdate();
    PriceUpdate('labelThree', 2);
    AutoUpdate();
}

function ScoreUpdate(){
    document.getElementById('score').innerHTML = "score: " + Math.floor(score*10)/10;
}

function PriceUpdate(id, arrNum){
    document.getElementById(id).innerHTML = price[arrNum] + " score:";
}

function AutoUpdate(){
    document.getElementById('auto').innerHTML = "auto: " + auto*2 + " C/s";
}

function AutoAdd(){
    score += auto;
    ScoreUpdate();
}