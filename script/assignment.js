// Task 1 (Zakat):

// var zakatpercentage=0.025;
// var UserInput= +prompt("Enter Your amount for Zakat");
// var result=zakatpercentage * Number(UserInput);
// alert("Your Zakat is: " + result);


// --------------------------------------------------------------------------------------------------------


// Task 2 (Fitra) 

// var familyMembers =prompt("Enter the total number of your family members");
// var fitrah= prompt("Choose a fitrah method : GANDUM - Rs500 /person, Raisins - Rs3000 /person, Dry fruit - Rs1200 /person");
// var price;
// if (fitrah == 'GANDUM') {
// price = 500;
// } else if (fitrah == 'Raisins') {
// price = 3000;
// } else if (fitrah == 'Dry fruit') {
// price = 12000;
// } else {
// alert("Please choose a valid option");
// }

// var totalFitrah = price * familyMembers;

// alert("your total fitrah = " + totalFitrah );



// ------------------------------------------------------------------------------------------------------------



//Task 3 (secret no)..

// var secretNumber=6;
// var guess = +prompt("Take a guess between 1 to 10");
// if (guess == secretNumber) {
//   alert("Congratulations! You hit the nail on the head!");
// } else if (guess < secretNumber) {
//   alert("Oopss Please rethink your approach and try again.");
// } else {
//   alert("Try a lower guess this time! Keep refining your guesses until you get it right!");
// }

// ----------------------------------------------------------------------------------------------------------------


// // Task 4  (capatilizied name)..

// var name = prompt("Enter your name:");
// var capitalized_name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
// alert(capitalized_name);


// ----------------------------------------------------------------------------------------------------------------


// Task 5 (contacts) 


// var  contactNames = [];
// var contactNumbers = [];

// for ( i = 0; i < 3; i++) {
//   var UserName = prompt("Enter Contact Name:");
//   var UserNumber = +prompt("Enter Contact Number:");
//   contactNames.push( UserName);
//   contactNumbers.push(UserNumber);
// }

// for ( i = 0; i < contactNumbers.length; i++) {
//   console.log(contactNames[i] + " : " + contactNumbers[i]);
// }

// --------------------------------------------------------------------------------------------------------------

// Task 6 (product remove) 

// var products = ["Lays", "Takis", "Kurkure", "Doristos", "Pringles"];
// var position =+prompt("Enter the position of product that yoou want (0-" + products.length + "):");
// var removedproduct = products.splice(position - 0, 1);
// console.log("Removed product: " + removedproduct);
// alert("Remaining products : " + products );
// alert("remaining quantity : " + products.length);


// --------------------------------------------------------------------------------------------------------------

// Task 7 


// var nationality = prompt("Enter your nationality please:");
// if (nationality.toLowerCase() === "pakistani" || nationality.toLowerCase() === "indian") {
//   var gender = prompt("enter your gender please:");
//   var age =+prompt("enter your age please:");
//   if (gender.toLowerCase() === "male") {
//     if (age >= 18) {
//       alert("You are eligible to vote :)");
//     } else {
//       alert("You are not eligible to vote :(");
//     }
//   } else if (gender.toLowerCase() === "female") {
//     if (age >= 18) {
//       var married = prompt("Are u married? ans in o & x");
//       if (married.toLowerCase() === "o") {
//         alert("you are eligible to vote.");
//       } else {
//         alert("you are not  eligible to vote.");
//       }
//     } else {
//       alert("you are not  eligible to vote.");
//     }
//   }
// } else {
//   alert("You are not eligible to vote.");
// }



// --------------------------------------------------------------------------------------------------------------

// Task 8 (Pakistani Teams Player : make a copy of array ) 


// var WorldCupSquad = ["Shaheen Afridi", "Babar Azam", "Muhammad Hasnain", "Naseem Shah", "Hasan Ali","Imran Khan","Muhammad Haris","Imam-ul-Haq","Asif Ali","Wahab Riaz","Shoaib Malik","Sarfaraz Ahmed","Mohammad Amir","Imad Wasim","Shadab Khan"]
// var finalteam = WorldCupSquad.slice(0, 11);
// alert("Final Players that will be in the WorldCup against India : " + finalteam);
// console.log("finalteam")
