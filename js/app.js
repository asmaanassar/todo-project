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
}
