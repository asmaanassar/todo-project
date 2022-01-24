
console.log("Hi I'm inside the js ");
var myName = "Asmaa-Nassar";
alert("Hello User ");
alert("I'm Asma'a");
var User = prompt("What's your name ?");
console.log(User)
alert(User);
let Gender = prompt("enter your gender if (male or female), ");
let newGender = Gender.toLocaleLowerCase();
let ask = prompt("you need To skip welcoming message", "");
let newAsk = ask.toLocaleLowerCase();
if (newAsk != "yes") {
    if (newGender == "male") {
        alert("Welcom Mr:" + User);
    }
    elseif(newGender == "femal"); {
        alert("Welcom Miss:" + User);
    }
    elseif(newGender == ""); {
        alert("welcom:" + User);
    }
}
let age=prompt("please enter your age",);
if(age<=0){

    alert("the age is not correct please enter in the correct way",);
    age=prompt("please enter your age",);
}


let Ques1 = confirm("Are you married?");
if (Ques1) {
    Ans1 = prompt("yes");
} else {
    Ans1 = prompt("no");}

    
    let Ques2 = confirm("Are you working in ltuc before?");
if (Ques2) {
    Ans2 = prompt("yes");
} else {
    Ans2 = prompt("no");}

    let Ques3 = confirm("Are you finish the working?");
let Ans3;
if (Ques3) {
    Ans3 = prompt("yes");
} else {
    Ans3 = prompt("no");}

    let arrayAns=[Ans1,Ans2,Ans3];
    for(let i=0;i<=3;i++)
    {
        console.log(arrayAns[i]);
    }
console.log("Hi I'm inside the js ");
var myName = "Asmaa-Nassar";
alert("Hello User ");
 alert("I'm Asma'a");
 var User = prompt("What's your name ?");
 console.log(User)
 alert(User);
 var Gender = prompt("what's your Gender");
 console.log( Gender);
 alert(Gender);

 /* if (Gender !="male" || Gender !="female")
  {
    alert("Enter the correct Gender male or female"); */

if(Gender =="male" || Gender =="female")
  {
    let text = "are you want to skip to the welcome message?";
     if (confirm(text) == true) 
     {
        text= alert("Welcome Mr/Ms"+ User);
      } 
      else {
        text=alert("Welcome"+ User);
      }
    }
     //alert("Welcome Mr/Ms"+ User);
     
     //alert("Welcome"+ User);
  
  //else{alert("Welcome"+ User);}
  
 else if (Gender !="male" || Gender !="female")
  {
    alert("Enter the correct Gender male or female");}

 var userAge = prompt("How old are you ?");
console.log(userAge);
if (userAge <= 0) 
{
    alert("Enter the correct age"); 
} main
