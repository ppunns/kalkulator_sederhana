const display = document.getElementById('display');
const l_num = document.querySelectorAll('.num');
const count = document.querySelectorAll('.perhitungan')
const hasil = document.getElementById('hasil')
const ac_var = document.getElementById('ac')
const del = document.getElementById('delete')


let firsValue = null;
let secondValue = null;
let arithmetic = null;
let DispayArray = []


function appendToDisplay(value){//Memasukan nilai ke firstvalue dan secondValue
    DispayArray.push(value)
    display.value = DispayArray.join("")
    if (firsValue == null || arithmetic == null) {
        firsValue = display.value;
    }else if(secondValue == null || arithmetic != null){
        secondValue = display.value
    }
}
function calculating(){//Melakukan Perhitungan
    let temp = 0;
    if (arithmetic === '+') {
        temp =  Number(firsValue) + Number(secondValue);
    }else if(arithmetic === '-'){
        temp =  Number(firsValue) - Number(secondValue);
    }else if(arithmetic === '*'){
        temp =  Number(firsValue) * Number(secondValue);
    }else if(arithmetic === '/'){
        temp =  Number(firsValue) / Number(secondValue);
    }else if(arithmetic === '%'){
        if(arithmetic != null){
            temp = Number(firsValue)/100;
        }else if(secondValue != null){
            temp = Number(firsValue) + Number(secondValue)
        }
    }
    display.value = temp;
}
l_num.forEach(num =>{//Mengklik nomer
    num.addEventListener('click',()=>{
        const value = num.dataset.value;
        appendToDisplay(value);
    })
})
count.forEach(perhitungan=>{//Mengklik Perhitungan
    perhitungan.addEventListener('click',function(){
        const count = perhitungan.dataset.value;
        display.value = null;
        DispayArray = []
        arithmetic = count;
    })
})
hasil.addEventListener('click',()=>{
    display.value = null;
    calculating()
})
ac_var.addEventListener('click',()=>{
    display.value = '';
    DispayArray = []
    firsValue = null;
    secondValue= null;
    arithmetic = null;
})    
del.addEventListener('click',()=>{
    DispayArray.pop();
    display.value = DispayArray.join('')
    if (arithmetic == null) {
        firsValue = DispayArray.join('')
    }else{
        secondValue = DispayArray.join('')
    }
})