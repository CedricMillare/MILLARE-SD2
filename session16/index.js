console.log("Hello World!");

// [SECTION] Selection Control Structure
// 1. if-else else-if statement

let age = 10;

if( age >= 18){
    console.log("Your are eligible for driver's license");
}

let city = "cebu";

if (city == "manila"){
    console.log("Welcome to the capital region.");
} else{
    console.log("the selected area is not in Manila.");
}

if(age >= 18 && city == "cebu"){
    console.log("You can register for the event.");
}else if(age <= 18){
    console.log("You are not eligible to register for the event.");
}else{
    console.log("All criteria not met.");
}

// let role = prompt("Please enter your role.").toLocaleLowerCase();

// if(role == "admin"){
//     alert("Welcome to UA Portal, Administrator!");
// }else if(role == "teacher"){
//     alert("Welcome to UA Portal, Faculty!");
// }else if(role == "student"){
//     alert("Welcome to UA Portal, Assumptionist!");
// }else{
//     alert("Please enter valid role.");
// }

// 2. Switch-Case Statement

// let day = 5;

// switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     default:
//         console.log("Please enter between 1-5 only.");
//         break;
// }

let role = prompt("Please enter your role.").toLocaleLowerCase();

switch (role){
    case "admin":
        alert("Welcome to UA Portal, Administrator!");
        break;
    case "teacher":
        alert("Welcome to UA Portal, Faculty!");
        break;
    case "student":
        alert("Welcome to UA Portal, Assumptionist!");
        break;
    default:
        alert("Please enter valid role.");
        break;
}