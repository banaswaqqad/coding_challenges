


let num1=prompt('enter first num');
let num2=prompt('enter sec num');
let num3=prompt('enter third num');
let num4=prompt('enter fourth num');
let num5=prompt('enter fifth num');


let numbers=[num1,num2,num3,num4,num5];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > num1||  numbers[i] > num2||  numbers[i] > num3 ||  numbers[i] > num4  || numbers[i] > num5  ) {
    
        alert(numbers[i]);
            
}


else 
if (numbers[i] < num1 ||  numbers[i] < num2 ||  numbers[i] < num3 ||  numbers[i] < num4  || numbers[i] < num5  ) {
    
    alert(numbers[i]);
}
}
