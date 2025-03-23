console.log("Hello Javascript!");
let a=10;
let b=5;
console.log("sum is : " , a+b);

// Template literals

let pencil=10;
let eraser=5;
let output=`The total price is : ${pencil+eraser} Rupees`;
console.log(output);

//Arthematic operator

let c=5;
let d=3;
console.log(c+d);
console.log(c-d);
console.log(c*d);
console.log(c/d);
console.log(c%d);
console.log(c**d);

//unary operator

let e=10;
console.log(e++); //10
console.log(++e); //12

//Assignment operator

let f=10;
let g=4;
g=f;
console.log(g); //10

//Comparison operator

let age=16;
console.log(age<18); //true
console.log(age>18); //false
console.log(age<=18); //true
console.log(age>=18); //false
console.log(age==18); //false
console.log(age!=18); //true
let n = 4;
let str= '4';
console.log(n==str); //true  beacuse javascript neglect types 
console.log(n===str); //false (===) this operator strictly check types

//conditional statement
//if statement run all if statements if is it true 

console.log("before my if statement");
let agee=19;
if(agee>=18){
    console.log("you can vote"); //true
    console.log("you can drive"); //true
}
if(agee<=18){
    console.log("you cannot vote"); //false (19<=18) 
}

let Name="iqra";
if(Name=="iqra"){
    console.log(`Welcome ${Name}`); //true
}

//else if statement
//when (if) statement is true then else if not working but 
//when if condition does'nt true then  else if work

let marks=75;
if(marks>=80){ // 81>=80
    console.log('A+');
} 
else if(marks>=70){ // 75>=70
    console.log('A');
}
else if(marks>=60){ // 65>=60
    console.log('B');
}
else if(marks>=50){ // 55>=50
    console.log('C');
}
else if(marks<50){ // 49<50
    console.log('F');
}

// if else statement
//when if statement all true then else does'nt run but
//when if all statements are false then else run
let value=17;
if(value>=18){
    console.log('you can vote');
}
else{
    console.log('you cannot vote');
}

let colour='orange';
 if(colour=='red'){
    console.log('stop');
}
else if(colour=='yellow'){
    console.log('Slow down');
}
else if(colour=='green'){
    console.log('Go');
}
else{
    console.log('traffic light is broken')
}

let size='small'
if(size==='Xlarge')
{
    console.log("price is 250")
}
else if (size==='large')
{
    console.log("price is 200")
}
else if(size=== 'medium'){
    console.log('price is 100')
}
else{
    console.log('price is 50')
}
 
//nested if-else
//write if-else statement inside if-else statement
let mark=93;
if(mark>=33){
    console.log('pass');
    if(mark>=80){
        console.log('Outstanding')
    }
    else{
        console.log('A')
    }
}
else{
    console.log('Better luck next time');
}



//logical operator 
//&& and || or ! not
let mrks=75;
if(mrks>=33 && mrks>=70){
    console.log('A')
    console.log('Pass') //false
}
else{
    console.log('Better luck next time')
}
let Marks=15;
if(Marks>=33 || Marks>=80){
    console.log('A')
    console.log('Pass') //true
}
else{
    console.log('Better luck next time')
}

let markss=20
if(!(markss<33)){
    console.log('pass')
    console.log('A')
}
else{
    console.log("f")
}

//example 1
let strr='apple'
if(strr[0]==='a' && strr.length>3){
    console.log('its a good string')
}
else{
    console.log('its not a good string')
}

//example 2
let num=12
if(num%3===0 && (num+1==15 || num-1==11)){
    console.log('safe')
}
else{
    console.log('unsafe')
}

//swtitching
let colr='green'
switch(colr){
    case 'red':
        console.log('stop')
        break
    case 'yellow':
    console.log('slow down')
    break
    case 'green':
        console.log('go')
        break
    default:
    console.log("light is broken")
    break
}

//example 1
let day='7';
switch(day){
    case '1':
    console.log("monday")
    break
    case '2':
        console.log('tuesday')
        break
    case '3':
    console.log('wed')
        break
        case '4':
    console.log('thur')
        break
        case '5':
    console.log('fri')
        break
        case '6':
    console.log('sat')
        break
        case '7':
    console.log('sun')
        break
    default:
        console.log("wrong input")
        break
}
//alerts and prompts
//alerts show output on screen 
alert("this is alert msg")
console.log('this is a simp msg')
console.error('this is an error msg')
console.warn('this is a warning msg')
//prompts take input for use 
let namee=prompt("enter your name:")
console.log(namee)
//concatinate the 2 prompts
let fname=prompt("enter the first name:")
let lname=prompt("neter the last name: ")
console.log("wlcome" , fname , " ", lname)
//aanother way 
let fnamee=prompt("enter the first name:")
let lnamee=prompt("neter the last name: ")
let msg="welcome"+" "+fnamee+" "+lnamee
alert(msg)
