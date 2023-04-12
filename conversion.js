const convertPoundsToKiloGrams = (pounds) => {
    
    let kilograms = pounds * 0.453592;
    return kilograms;
}
    
const convertInchesToCentiMeters = (inches) => { 
    
    let CentiMeters = inches * 2.54;
    return CentiMeters;
}

const convertFahrenheitToCelsius = (fahrenheit) => {
    
    let Celsius = (fahrenheit - 32) * 5/9;
    return Celsius.toFixed(2);
}
    
const convertFeetToMeters = (feet) => { 
    
    let Meters = feet * 0.3048;
    return Meters;
}
console.log(convertPoundsToKiloGrams(10) + "kg");
console.log(convertInchesToCentiMeters(75) + "cm");
console.log(convertFahrenheitToCelsius(1024) + "");
console.log(convertFeetToMeters(55) + "m");
