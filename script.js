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
    document.getElementById('form').disabled = document.getElementById('TAC').checked ? false : true;
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

Load();
setInterval(AutoAdd, 250);


function LebronClicker(){
    PriceUpdate('labelOne', 0);
    PriceUpdate('labelTwo', 1);
    PriceUpdate('labelThree', 2);
    PriceUpdate('labelFour', 3);
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
    Save();
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
    Save();
}

function Save(){
    localStorage.setItem('score', JSON.stringify(score));
    localStorage.setItem('add', JSON.stringify(add));
    localStorage.setItem('multiply', JSON.stringify(multiply));
    localStorage.setItem('auto', JSON.stringify(auto));
    localStorage.setItem('autoMulti', JSON.stringify(autoMulti));
    localStorage.setItem('win', JSON.stringify(win));
    localStorage.setItem('price', JSON.stringify(price));
}

function Load(){
    localStorage.getItem('score') == null ? 0 : score = JSON.parse(localStorage.getItem('score'));
    localStorage.getItem('add') == null ? 1 : add = JSON.parse(localStorage.getItem('add'));
    localStorage.getItem('multiply') == null ? 1 : multiply = JSON.parse(localStorage.getItem('multiply'));
    localStorage.getItem('auto') == null ? 0 : auto = JSON.parse(localStorage.getItem('auto'));
    localStorage.getItem('autoMulti') == null ? 1 : autoMulti = JSON.parse(localStorage.getItem('autoMulti'));
    localStorage.getItem('win') == null ? [false, false] : win = JSON.parse(localStorage.getItem('win'));
    localStorage.getItem('price') == null ? [10, 100, 1000, 10000] : price = JSON.parse(localStorage.getItem('price'));
}

function Reset(){
    localStorage.removeItem('score');
    localStorage.removeItem('add');
    localStorage.removeItem('multiply');
    localStorage.removeItem('auto');
    localStorage.removeItem('autoMulti');
    localStorage.removeItem('win');
    localStorage.removeItem('price');
    score = 0;
    add = 1;
    multiply = 1;
    auto = 0;
    autoMulti = 1;
    price = [10, 100, 1000, 10000];
    priceIn = [1, 10, 100, 1000]
    win = [false, false];
    buy = 1;
    price = [10, 100, 1000, 10000];
}