// -----------------------------------Chapter 38 TO 42-----------------------------------

// Question 1

// function power(a, b) {
//     var result = 1; 
//     for (var i = 0; i < b; i++) {
//       result *= a; 
//     }
//     return result;
//   }
  
//   console.log(power(2, 3)); 
//   console.log(power(5, 4)); 
  

// Question 2

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true; 
//     } else {
//       return false; 
//     }
//   }
  
//   console.log(isLeapYear(2012)); 
//   console.log(isLeapYear(2016)); 
//   console.log(isLeapYear(2020)); 
//   console.log(isLeapYear(2023)); 
//   console.log(isLeapYear(1900)); 
//   console.log(isLeapYear(2000)); 
  

// Question 3

// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
//   }
  
//   function calculateTriangleArea(a, b, c) {
//     var s = calculateSemiPerimeter(a, b, c);
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   }
  
//   console.log(calculateTriangleArea(3, 4, 5)); 
//   console.log(calculateTriangleArea(7, 8, 9)); 
  
// Question 4

// function calculateAverage(marks) {
//     var total = marks.reduce((sum, mark) => sum + mark, 0);
//     return total / marks.length;
//   }
  
//   function calculatePercentage(marks, totalMarksPerSubject) {
//     var total = marks.reduce((sum, mark) => sum + mark, 0);
//     return (total / (marks.length * totalMarksPerSubject)) * 100;
//   }
  
//   function mainFunction() {
//     var marks = [85, 90, 78];
//     var totalMarksPerSubject = 100; 
  
//     var average = calculateAverage(marks);
//     var percentage = calculatePercentage(marks, totalMarksPerSubject);
  
//     console.log("Average Marks:", average.toFixed(2));
//     console.log("Percentage:", percentage.toFixed(2) + "%");
//   }
  
//   mainFunction();
  
// Question 5

// function customIndexOf(string, char) {
//     for (var i = 0; i < string.length; i++) {
//       if (string[i] === char) {
//         return i; 
//       }
//     }
//     return -1;
//   }
  
//   console.log(customIndexOf("hello", "e"));
//   console.log(customIndexOf("hello", "l")); 
//   console.log(customIndexOf("hello", "z")); 
  
// Question 6

// function removeVowels(sentence) {
//     var vowels = "aeiouAEIOU";
  
//     var result = "";
  
//     for (var i = 0; i < sentence.length; i++) {
//       if (!vowels.includes(sentence[i])) {
//         result += sentence[i];
//       }
//     }
  
//     return result;
//   }
  
//   console.log(removeVowels("This is a test sentence."));
//   console.log(removeVowels("Hello World!")); 
//   console.log(removeVowels("AEIOUaeiou")); 
  
// Question 7

// function countSuccessiveVowels(sentence) {
//     var vowels = "aeiouAEIOU"; 
//     var count = 0; 
  
//     for (var i = 0; i < sentence.length - 1; i++) {
//       var char1 = sentence[i];
//       var char2 = sentence[i + 1];
  
//       if (vowels.includes(char1) && vowels.includes(char2)) {
//         switch (char1 + char2) {
//           default: above
  
// Question 8

// function convertToMeters(km) {
//     return km * 1000;
//   }
  
//   function convertToFeet(km) {
//     return km * 3280.84;
//   }
  
//   function convertToInches(km) {
//     return km * 39370.1;
//   }
  
//   function convertToCentimeters(km) {
//     return km * 100000;
//   }
  
//   function mainFunction() {
//     var distanceKm = 5; 
  
//     var meters = convertToMeters(distanceKm);
//     var feet = convertToFeet(distanceKm);
//     var inches = convertToInches(distanceKm);
//     var centimeters = convertToCentimeters(distanceKm);
  
//     console.log(`Distance in kilometers: ${distanceKm} km`);
//     console.log(`Distance in meters: ${meters} m`);
//     console.log(`Distance in feet: ${feet.toFixed(2)} ft`);
//     console.log(`Distance in inches: ${inches.toFixed(2)} in`);
//     console.log(`Distance in centimeters: ${centimeters} cm`);
//   }
  
//   mainFunction();
  
// Question 9

// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40; 
//     var overtimeRate = 12.0; 
  
//     if (hoursWorked > regularHours) {
//       var overtimeHours = hoursWorked - regularHours; 
//       return overtimeHours * overtimeRate;
//     } else {
//       return 0; 
//     }
//   }
  
//   function mainFunction() {
//     var hoursWorked = 45; 
  
//     var overtimePay = calculateOvertimePay(hoursWorked);
  
//     console.log(`Total hours worked: ${hoursWorked}`);
//     console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);
//   }
  
//   mainFunction();
  
// Question 10

// function calculateCurrencyNotes(amount) {
//     var hundredNote = 100;  
//     var fiftyNote = 50;    
//     var tenNote = 10;       
    
//     var numHundredNotes = Math.floor(amount / hundredNote);
//     amount = amount % hundredNote; 
    
//     var numFiftyNotes = Math.floor(amount / fiftyNote);
//     amount = amount % fiftyNote;  
    
//     var numTenNotes = Math.floor(amount / tenNote);
    
//     console.log(`Number of 100 Rs notes: ${numHundredNotes}`);
//     console.log(`Number of 50 Rs notes: ${numFiftyNotes}`);
//     console.log(`Number of 10 Rs notes: ${numTenNotes}`);
//   }
  
//   function mainFunction() {
//     var amount = 380;  
    
//     calculateCurrencyNotes(amount);
//   }
  
//   mainFunction();
  

// -----------------------------------Chapter 43 TO 48-----------------------------------


// Question 1

// function showAlert() {
//     alert("You clicked the link!");
//   }

// Question 2

// function purchaseMessage() {
//     alert("Thanks for purchasing!");
//   }

// Question 3

// function deleteRow(button) {
//     var row = button.parentNode.parentNode;
//     row.remove();
//   }

// Question 4

// function changeImage() {
//     document.getElementById('image').src = "./Assets/Images/316-3165336_android-smartphone-png-transparent-png.png";
//   }

//   function resetImage() {
//     document.getElementById('image').src = "./Assets/Images/316-3165336_android-smartphone-png-transparent-png.png";
//   }

// Question 5

// var counter = 0;

// function increaseCounter() {
//   counter++;
//   updateCounter();
// }

// function decreaseCounter() {
//   counter--;
//   updateCounter();
// }

// function updateCounter() {
//   document.getElementById('counter').textContent = counter;
// }

// -----------------------------------Chapter 49 TO 52 -----------------------------------
// Question 1

// function handleSubmit(event) {
//     event.preventDefault();
    
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
    
//     document.getElementById('displayName').textContent = name;
//     document.getElementById('displayEmail').textContent = email;
//     document.getElementById('displayPassword').textContent = password;

//     document.getElementById('result').style.display = 'block';

//     document.getElementById('signupForm').reset();
//   }

// Question 2

// function toggleReadMore() {
//     var preview = document.querySelector('.preview');
//     var fullContent = document.querySelector('.full-content');
//     var readMoreLink = document.querySelector('.read-more');

//     if (fullContent.style.display === 'none') {
//       fullContent.style.display = 'block';
//       preview.style.display = 'none';
//       readMoreLink.textContent = 'Read less';
//     } else {
//       fullContent.style.display = 'none';
//       preview.style.display = 'block';
//       readMoreLink.textContent = 'Read more';
//     }
//   }

// Question 3
// var studentForm = document.getElementById('studentForm');
// var studentTable = document.getElementById('studentTable').querySelector('tbody');
// var editForm = document.getElementById('editForm');
// var editName = document.getElementById('editName');
// var editAge = document.getElementById('editAge');
// var editGrade = document.getElementById('editGrade');
// var cancelEdit = document.getElementById('cancelEdit');

// var currentRow = null;

// studentForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   var name = document.getElementById('name').value;
//   var age = document.getElementById('age').value;
//   var grade = document.getElementById('grade').value;

//   addRow(name, age, grade);

//   studentForm.reset();
// });

// function addRow(name, age, grade) {
//   var row = document.createElement('tr');

//   row.innerHTML = `
//     <td>${name}</td>
//     <td>${age}</td>
//     <td>${grade}</td>
//     <td>
//       <button class="edit">Edit</button>
//       <button class="delete">Delete</button>
//     </td>
//   `;

//   row.querySelector('.delete').addEventListener('click', () => {
//     row.remove();
//   });

//   row.querySelector('.edit').addEventListener('click', () => {
//     currentRow = row;
//     editName.value = name;
//     editAge.value = age;
//     editGrade.value = grade;

//     editForm.classList.remove('hidden');
//   });

//   studentTable.appendChild(row);
// }

// editForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   currentRow.cells[0].textContent = editName.value;
//   currentRow.cells[1].textContent = editAge.value;
//   currentRow.cells[2].textContent = editGrade.value;

//   editForm.classList.add('hidden');
// });

// cancelEdit.addEventListener('click', () => {
//   editForm.classList.add('hidden');
// });

// -----------------------------------Chapter 58 TO 67 -----------------------------------

// Question 1

// var mainContent = document.getElementById("main-content");
// console.log("Main Content Element:", mainContent);

// var mainContentChildren = mainContent.children;
// console.log("Child Elements of Main Content:");
// for (var child of mainContentChildren) {
//   console.log(child);
// }

// var renderElements = document.getElementsByClassName("render");
// console.log("Inner HTML of Elements with class 'render':");
// for (var element of renderElements) {
//   console.log(element.innerHTML);
// }

// var firstNameInput = document.getElementById("first-name");
// firstNameInput.value = "Alex";

// var lastNameInput = document.getElementById("last-name");
// lastNameInput.value = "Bank";

// var emailInput = document.getElementById("email");
// emailInput.value = "alexbank@example.com";

// Question 2

// var formContent = document.getElementById("form-content");
//     console.log("Node type of 'form-content':", formContent.nodeType); 

//     var lastName = document.getElementById("lastName");
//     console.log("Node type of 'lastName':", lastName.nodeType); 
//     console.log("Node type of 'lastName' child:", lastName.firstChild.nodeType); 

//     lastName.innerHTML = "Last Name: Smith";
//     console.log("Updated 'lastName' child node:", lastName.innerHTML);

//     var mainContent = document.getElementById("main-content");
//     console.log("First child of 'main-content':", mainContent.firstElementChild);
//     console.log("Last child of 'main-content':", mainContent.lastElementChild);

//     console.log("Next sibling of 'lastName':", lastName.nextElementSibling);
//     console.log("Previous sibling of 'lastName':", lastName.previousElementSibling);

//     var email = document.getElementById("email");
//     console.log("Parent node of 'email':", email.parentNode);
//     console.log("Node type of 'email':", email.parentNode.nodeType); 