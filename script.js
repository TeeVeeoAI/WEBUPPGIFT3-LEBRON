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

function LeDunk(){
    document.getElementById('Ledunk').classList.toggle('is-hidden');
    document.getElementById('else').classList.toggle('is-hidden');
    document.getElementById('LeAudio').muted = document.getElementById('LeAudio').muted ? false : true;
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
let autoMulti = 1;
let price = [10, 100, 1000, 10000];
let priceIn = [1, 10, 100, 1000]
let win = [false, false];
let buy = 1;

setInterval(AutoAdd, 250);

function LebronClicker(){
    score += add * multiply;
    ScoreUpdate();
    AutoUpdate();

    if(score >= 100000 && !win[0]){
        alert('You win!!!!');
        win[0] = true;
    }
    if(score >= 1000000 && !win[0]){
        alert('You extra win!!!! (Sponsore by Jetmir)');
        win[0] = true;
    }
}

function OnePlus(){
    if (score >= (price[0]*buy +
            ((buy == 5) ? priceIn[0]*buy+(priceIn[0]*buy) : 0) + 
            ((buy == 10) ? (priceIn[0]*buy + (priceIn[0]*buy) * 3 + (priceIn[0]*buy/2)) : 0))){
        add += 1*buy;
        score -= (price[0]*buy +
            ((buy == 5) ? priceIn[0]*buy+(priceIn[0]*buy) : 0) + 
            ((buy == 10) ? (priceIn[0]*buy + (priceIn[0]*buy) * 3 + (priceIn[0]*buy/2)) : 0));
        price[0] += priceIn[0]*buy;
    }
    ScoreUpdate();
    PriceUpdate('labelOne', 0);
}

function MultiplyerPointOne(){
    if (score >= (price[1]*buy +
            ((buy == 5) ? priceIn[1]*buy+(priceIn[1]*buy) : 0) + 
            ((buy == 10) ? (priceIn[1]*buy + (priceIn[1]*buy) * 3 + (priceIn[1]*buy/2)) : 0))){
        multiply += 0.1*buy;
        score -= (price[1]*buy +
            ((buy == 5) ? priceIn[1]*buy+(priceIn[1]*buy) : 0) + 
            ((buy == 10) ? (priceIn[1]*buy + (priceIn[1]*buy) * 3 + (priceIn[1]*buy/2)) : 0));
        price[1] += priceIn[1]*buy;
    }
    ScoreUpdate();
    PriceUpdate('labelTwo', 1);
}

function Auto(){
    if (score >= (price[2]*buy +
            ((buy == 5) ? priceIn[2]*buy+(priceIn[2]*buy) : 0) + 
            ((buy == 10) ? (priceIn[2]*buy + (priceIn[2]*buy) * 3 + (priceIn[2]*buy/2)) : 0))){
        auto += 0.25*buy;
        score -= (price[2]*buy +
            ((buy == 5) ? priceIn[2]*buy+(priceIn[2]*buy) : 0) + 
            ((buy == 10) ? (priceIn[2]*buy + (priceIn[2]*buy) * 3 + (priceIn[2]*buy/2)) : 0));
        price[2] += priceIn[2]*buy;
    }
    ScoreUpdate();
    PriceUpdate('labelThree', 2);
    AutoUpdate();
}

function AutoMulti(){
    if (score >= (price[3]*buy +
            ((buy == 5) ? priceIn[3]*buy+(priceIn[3]*buy) : 0) + 
            ((buy == 10) ? (priceIn[3]*buy + (priceIn[3]*buy) * 3 + (priceIn[3]*buy/2)) : 0))){
        autoMulti += 0.1*buy;
        score -= (price[3]*buy +
            ((buy == 5) ? priceIn[3]*buy+(priceIn[3]*buy) : 0) + 
            ((buy == 10) ? (priceIn[3]*buy + (priceIn[3]*buy) * 3 + (priceIn[3]*buy/2)) : 0));
        price[3] += priceIn[3]*buy;
    }
    ScoreUpdate();
    PriceUpdate('labelFour', 3);
    AutoUpdate();
}

function ScoreUpdate(){
    document.getElementById('score').innerHTML = "Lebrons: " + Math.floor(score*10)/10;
}

function PriceUpdate(id, arrNum){
    document.getElementById(id).innerHTML = price[arrNum]*buy +
    ((buy == 5) ? priceIn[arrNum]*buy+(priceIn[arrNum]*buy) : 0) + 
    ((buy == 10) ? (priceIn[arrNum]*buy + (priceIn[arrNum]*buy) * 3 + (priceIn[arrNum]*buy/2)) : 0)  + 
    " Lebrons:";
}

function AutoUpdate(){
    document.getElementById('autoC').innerHTML = "auto: " + Math.floor(auto*autoMulti*4*10)/10 + " L/s";
}

function AutoAdd(){
    score += auto*autoMulti;
    ScoreUpdate();
}

function BuyOne(){
    document.getElementById('buyOne').classList = 'button is-success';
    document.getElementById('buyTwo').classList = 'button';
    document.getElementById('buyThree').classList = 'button';
    buy = 1;
    PriceUpdate('labelOne', 0);
    PriceUpdate('labelTwo', 1);
    PriceUpdate('labelThree', 2);
    PriceUpdate('labelFour', 3);
    LeUp();
}

function BuyTwo(){
    document.getElementById('buyOne').classList = 'button';
    document.getElementById('buyTwo').classList = 'button is-success';
    document.getElementById('buyThree').classList = 'button';
    buy = 5;
    PriceUpdate('labelOne', 0);
    PriceUpdate('labelTwo', 1);
    PriceUpdate('labelThree', 2);
    PriceUpdate('labelFour', 3);
    LeUp();
}

function BuyThree(){
    document.getElementById('buyOne').classList = 'button';
    document.getElementById('buyTwo').classList = 'button';
    document.getElementById('buyThree').classList = 'button is-success';
    buy = 10;
    PriceUpdate('labelOne', 0);
    PriceUpdate('labelTwo', 1);
    PriceUpdate('labelThree', 2);
    PriceUpdate('labelFour', 3);
    LeUp();
}

function LeUp(){
    document.getElementById('onePlus').innerHTML = "+" + 1*buy + " Click";
    document.getElementById('multiplyer').innerHTML = "+" + 0.1*buy + " Multiplyer";
    document.getElementById('auto').innerHTML = "+" + 1*buy + " Auto";
    document.getElementById('autoMulti').innerHTML = "+" + 0.1*buy + " Auto Multiplyer";
}