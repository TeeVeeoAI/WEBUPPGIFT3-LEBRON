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
let autoMulti = 1;
let price = [10, 100, 1000, 10000];
let priceIn = [1, 10, 100, 1000]
let win1 = false;
let win2 = false;
let buy = 2;

setInterval(AutoAdd, 250);

function LebronClicker(){
    score += add * multiply;
    ScoreUpdate();
    AutoUpdate();

    if(score >= 100000 && !win1){
        alert('You win!!!!');
        win1 = true;
    }
    if(score >= 1000000 && !win2){
        alert('You extra win!!!! (Sponsore by Jetmir)');
        win2 = true;
    }
}

function OnePlus(){
    if (score >= (price[0]*buy)+(priceIn[0]*buy)){
        add += 1*buy;
        score -= (price[0]*buy)+(priceIn[0]*buy);
        price[0] += priceIn[0]*buy;
    }
    ScoreUpdate();
    PriceUpdate('labelOne', 0);
}

function MultiplyerPointOne(){
    if (score >= (price[1]*buy)+(priceIn[1]*buy)){
        multiply += 0.1*buy;
        score -= (price[1]*buy)+(priceIn[1]*buy);
        price[1] += priceIn[1]*buy;
    }
    ScoreUpdate();
    PriceUpdate('labelTwo', 1);
}

function Auto(){
    if (score >= (price[2]*buy)+(priceIn[2]*buy)){
        auto += 0.25*buy;
        score -= (price[2]*buy)+(priceIn[2]*buy);
        price[2] += priceIn[2]*buy;
    }
    ScoreUpdate();
    PriceUpdate('labelThree', 2);
    AutoUpdate();
}

function AutoMulti(){
    if (score >= (price[3]*buy)+(1000*buy)){
        autoMulti += 0.1*buy;
        score -= (price[3]*buy)+(priceIn[3]*buy);
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
    document.getElementById(id).innerHTML = (price[arrNum]*buy)+(priceIn[arrNum]*buy) + " Lebrons:";
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
}