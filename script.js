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
let price = [10, 100];

function LebronClicker(){
    score += add * multiply;
    ScoreUpdate();
    if(score == 100){
        alert('You win!!!!');
    }
    if(score == 1000){
        alert('You extra win!!!! (Sponsore by Jetmir)')
    }
}

function OnePlus(){
    if (score >= price[0]){
        add++;
        score -= price[0];
        price[0]++;
    }
    ScoreUpdate();
    PriceUpdate();
}

function MultiplyerPointOne(){
    if (score >= price[1]){
        multiply += 0.1;
        score -= price[1];
        price[1] += 10;
    }
    ScoreUpdate();
    PriceUpdate();
}

function ScoreUpdate(){
    document.getElementById('score').innerHTML = "score: " + Math.floor(score*10)/10;
}

function PriceUpdate(){
    document.getElementById('onePlus').innerHTML = price[0] + pre
}