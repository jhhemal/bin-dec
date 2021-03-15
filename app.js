const number = document.querySelector('.number');
const result = document.querySelector('.result');
const text = document.querySelector('.text');

console.log(result)

text.textContent = `Please Enter a Binary number in Input  `;

function convertVal(){
    // console.log(this.value);
    let bin = this.value;
    let decimal = parseInt(bin, 2)

    if(this.value === ''){
        text.textContent = `Please Enter a Binary number in Input  `;
    }else{
        text.textContent = `The Decimal Value is `;
        result.textContent = `${decimal}`;
    }
}

number.addEventListener('change', convertVal);
number.addEventListener('keyup', convertVal);
