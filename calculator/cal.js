let result = 0;
let sev = 7;
let eig = 8;
let nin = 9;
let fou = 4;
let fiv = 5;
let six = 6;
let one = 1;
let two = 2;
let thr = 3;
let zer = 0;
let plus = '+' ;
let minus = '-' ;
let multiply ='*' ;
let division = '/' ;
let equal = '=' ;
let temp = 0;
let a = 0;
let b = 0;
let flagPlus = 0;
let flagMinus = 0
let flagMultiply = 0;
let flagDivision = 0;
let Delete = 0;

function sevenDisplay()  {
    let sevenjs = document.getElementById('LCD');
    temp = (temp*10)+7;
    sevenjs.innerHTML = temp;
}

function eightDisplay()  {
    let eightjs = document.getElementById('LCD');
    temp = (temp*10)+8;
    eightjs.innerHTML = temp;
}

function nineDisplay()  {
    let ninejs = document.getElementById('LCD');
    temp = (temp*10)+9;
    ninejs.innerHTML = temp;
}

function fourDisplay()  {
    let fourjs = document.getElementById('LCD');
    temp = (temp*10)+4;
    fourjs.innerHTML = temp;
}

function fiveDisplay()  {
    let fivejs = document.getElementById('LCD');
    temp = (temp*10)+5;
    fivejs.innerHTML = temp;
}

function sixDisplay()  {
    let sixjs = document.getElementById('LCD');
    temp = (temp*10)+6;
    sixjs.innerHTML = temp;
}

function oneDisplay()  {
    let onejs = document.getElementById('LCD');
    temp = (temp*10)+1;
    onejs.innerHTML = temp;
}

function twoDisplay()  {
    let twojs = document.getElementById('LCD');
    temp = (temp*10)+2;
    twojs.innerHTML = temp;
}

function threeDisplay()  {
    let threejs = document.getElementById('LCD');
    temp = (temp*10)+3;
    threejs.innerHTML = temp;
}

function zeroDisplay()  {
    let zerojs = document.getElementById('LCD');
    temp = (temp*10)+0;
    zerojs.innerHTML = temp;
}

function plusDisplay()  {
    let plusjs = document.getElementById('LCD');
    plusjs.innerHTML = plus;
    a = temp;
    console.log(plus);
    temp = 0;
    flagPlus = 1;
}

function minusDisplay()  {
    let minusjs = document.getElementById('LCD');
    minusjs.innerHTML = minus;
    a = temp;
    temp = 0;
    flagMinus = 1;
}

function multiplyDisplay()  {
    let multiplyjs = document.getElementById('LCD');
    multiplyjs.innerHTML = multiply;
    a = temp;
    temp = 0;
    flagMultiply = 1;
}

function divisionDisplay()  {
    let divisionjs = document.getElementById('LCD');
    divisionjs.innerHTML = division;
    a = temp;
    temp = 0;
    flagDivision = 1;
}

function equalDisplay()  {
    let equaljs = document.getElementById('LCD');
    //equaljs.innerHTML = equal;
    b = temp ;
    if(flagPlus == 1 ) {
        result = 0;
        result = a + b;
        //equaljs.innerHTML = result;
        flagPlus = 0;
    }
    else if(flagMinus == 1)
    {
        result = 0;
        result = a - b;
        //equaljs.innerHTML = result;
        flagMinus = 0;
    }
    else if(flagMultiply == 1)
    {
        result = 0;
        result = a * b;
        //equaljs.innerHTML = result;
        flagMultiply = 0;
    }
    else if(flagDivision == 1) 
    {
        result = 0;
        result = a / b;
        //equaljs.innerHTML = result;
        flagDivision = 0;
    }
    equaljs.innerHTML = result;
    temp = result;
}


function  deleteDisplay() {
    let deletejs = document.getElementById('LCD');
    deletejs.innerHTML = Delete;
    temp = 0;
}

let sevenButton = document.getElementById('seven');
sevenButton.addEventListener("click",sevenDisplay);

let eightButton = document.getElementById('eight');
eightButton.addEventListener("click",eightDisplay);

let nineButton = document.getElementById('nine');
nineButton.addEventListener("click",nineDisplay);

let fourButton = document.getElementById('four');
fourButton.addEventListener("click",fourDisplay);

let fiveButton = document.getElementById('five');
fiveButton.addEventListener("click",fiveDisplay);

let sixButton = document.getElementById('six');
sixButton.addEventListener("click",sixDisplay);

let oneButton = document.getElementById('one');
oneButton.addEventListener("click",oneDisplay);

let twoButton = document.getElementById('two');
twoButton.addEventListener("click",twoDisplay);

let threeButton = document.getElementById('three');
threeButton.addEventListener("click",threeDisplay);

let zeroButton = document.getElementById('zero');
zeroButton.addEventListener("click",zeroDisplay);

let plusButton = document.getElementById('plus');
plusButton.addEventListener("click",plusDisplay);

let minusButton = document.getElementById('minus');
minusButton.addEventListener("click",minusDisplay);

let multiplyButton = document.getElementById('multiply');
multiplyButton.addEventListener("click",multiplyDisplay);

let divisionButton = document.getElementById('division');
divisionButton.addEventListener("click",divisionDisplay);

let equalButton = document.getElementById('equal');
equalButton.addEventListener("click",equalDisplay);

let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click',deleteDisplay);

function switchTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "cal.css") {
      theme.href = "dark.css";
      darkMode.innerHTML = "Light Mode 🌞";
    } else {
      theme.href = "cal.css";
      darkMode.innerHTML = "Dark Mode 🌙";
    }
  }