const met = document.getElementById("metric");
const imp = document.getElementById("imperial");
const heightinp = document.getElementById("height");
const weightinp = document.getElementById("weight");
const ageinp = document.getElementById("age");
const maleButton = document.getElementById("maleB");
const femaleButton = document.getElementById("femaleB");
const calc = document.getElementById("calculate");
const bmifinal = document.getElementById("bmiFinal");
const bmrfinal = document.getElementById("bmrFinal");
const bmifeedback = document.getElementById("bmifeedback");
const bmrfeedback = document.getElementById("bmrfeedback");
let male = false;
let female = false;
let age = 0;
let height = 0;
let weight = 0;
let system = 0; //system 1 = metric, system 2 = imp 
const setMetric = () => {
    weightinp.setAttribute("placeholder", "kg");
    heightinp.setAttribute("placeholder", "meters");
    system = 1;
}
const setImp = () => {
    weightinp.setAttribute("placeholder", "lb");
    heightinp.setAttribute("placeholder", "feet");
    system = 2;
}
const setmale = () => {
    male = true;
    female = false;
}
const setfemale = () => {
    male = false;
    female = true;
}
const setvalues = () => {
    age = ageinp.value;
    height = heightinp.value;
    weight = weightinp.value;
    if (system === 2) {
        height = height * 0.3048;
        weight = weight * 0.45359237;
    }
}
const bmiCalc = () => { // takes care of the BMI calculation
    let bmi = 0;
    bmi = weight / (height * height);
    bmifinal.innerText = bmi;
    if (bmi < 18.5) {
        bmifeedback.innerText = `You're skinny as hell bruh, go eat something. You need to gain weight wtf -,- go eat more than ${bmr} calories smh, it'll help you gain some weight lmao`;
    } if (bmi >= 18.5 && bmi <= 24.9) {
        bmifeedback.innerText = `Woah you're really healthy! You have a bmi of ${bmi} and thats really good! keep it up!`
    } if (bmi > 24.9 && bmi <= 29.9) {
        bmifeedback.innerText = `Hmmmmm seems like you're getting a bit chubby there, you should consider losing some weight and maintain your eating habits :3 go get that perfect bmi, you can do it!`
    } if (bmi > 29.9) {
        bmifeedback.innerText = `Bruh tf, why the hell are you so friggin   F   A   T   wtf? Go hit the gym bruh. you really to lose alot of weight or you're gonna explode like a baloon! You can do it, keep working to lose weight!`
    }
}
const bmrCalc = () => { // calculates the BMR
    let bmr = 0;
    if (male) {
        bmr = 66 + (13.7 * weight) + (5 * (height * 100)) - (6.8 * age);
        bmrfinal.innerText = bmr + " calories";
    }
    if (female) {
        bmr = 655 + (9.6 * weight) + (1.8 * (height * 100)) - (4.7 * age);
        bmrfinal.innerText = bmr + " calories";
    }
    bmrfeedback.innerText = `Hmmmmmmmmmm seems like you need to eat around ${bmr} calories to maintain your current weight. If you want to lose weight, eat less than ${bmr} calories and if you want to gain weight, eat more than ${bmr} calories :)`;
}
const calculate = () => { // :3 takes care of the calculation all at once :D
    setvalues();
    bmiCalc();
    bmrCalc();
}
calc.onclick = calculate;