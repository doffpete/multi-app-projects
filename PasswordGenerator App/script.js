pwEl = document.getElementById('pw');
copyEl = document.getElementById('copy');
lenEl = document.getElementById('len');
upperEl = document.getElementById('upper');
lowerEl = document.getElementById('lower');
numberEl = document.getElementById('number');
symbolEl = document.getElementById('symbol');
generateEl = document.getElementById('generate');


const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';


function getUppercases() {
    return upperLetters[Math.floor(Math.random() *
        upperLetters.length)];
}


function getLowercases() {
    return lowerLetters[Math.floor(Math.random() *
        lowerLetters.length)];
}


function getNumbers() {
    return numbers[Math.floor(Math.random() *
        numbers.length)];
}


function getSymbols() {
    return symbols[Math.floor(Math.random() *
        symbols.length)];
}

   
function generatePassword(){

    const len = lenEl.value;

    let password = '';
    if (upperEl.checked) {
        password += getUppercases();
    }
    
    if (lowerEl.checked) {
        password += getLowercases();
    }
    
    if (numberEl.checked){
        password += getNumbers();
    }
    
    if (symbolEl.checked) {
        password += getSymbols();
    }

     for (let i= password.length; i < len; i++){
        const x = generateX();
        password += x;

     }

    pwEl.innerText = password;

};
   

function generateX() {
    const xs = [];

    if (xs.length === 0) return '';
    return xs[Math.floor(Math.random() * xs.length)];
};

generateEl.addEventListener('click',
    generatePassword);

 copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if(!password) { return; }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
 });