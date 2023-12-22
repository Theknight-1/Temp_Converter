// Taking input from the input fields
let celciusInput = document.querySelector('#celcius > input');
let fahrenheitInput = document.querySelector('#Fahrenheit > input');
let kelvinInput = document.querySelector('#Kelvin > input');
let RankineInput = document.querySelector('#Rankine > input');

// Taking input("click") from button
let btn = document.querySelector('.button button');


// converting the the output values into roundof
function roundNumber(Number){
    return Math.round(Number*100)/100
}

// Taking input from celcius input fields and converting it into diff Temp fields
celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5))+32;
    let kTemp = cTemp+270.15;
    let rTemp = (cTemp + 273.15) * 1.8;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp)
    RankineInput.value = roundNumber(rTemp)
})

// Taking input from fahrenheit input fields and converting it into diff Temp fields
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp -32)*(5/9)
    let kTemp = (fTemp-32)*(5/9)+273.15;
    let rTemp = (fTemp + 459.67);

    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
    RankineInput.value = roundNumber(rTemp);
})


// Taking input from kelvin input fields and converting it into diff Temp fields
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = (kTemp -273.15)
    let fTemp = (kTemp-273.15)*(9/5)+32;
    let rTemp = (kTemp*1.8);

    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp)
    RankineInput.value = roundNumber(rTemp)
})

// Taking input from Rankine input fields and converting it into diff Temp fields
RankineInput.addEventListener('input',function(){
    let rTemp = parseFloat(RankineInput.value);
    let cTemp = (rTemp - 491.67) / 1.8;
    let fTemp =  rTemp - 459.67;
    let kTemp = rTemp/ 1.8;
    

    celciusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})


// changing the values of all input fields into null
btn.addEventListener('click',()=>{
    celciusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
    RankineInput.value = "";
})