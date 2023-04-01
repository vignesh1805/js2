// 1)  Rows and Columns - accept no. of rows and columns from user and build a table
// document.querySelector("#btn").addEventListener("click", () => {
//     var cols = document.querySelector("#cols").value;
//     var rows = document.querySelector("#rows").value;
//     out = "";
//     if (cols != "" && rows != "") {
//         rows1 = parseInt(rows)
//         cols1 = parseInt(cols);
//     }
//     out += "<table border=1>";
//     for (rows=rows1; 0 < rows; rows--) {
//         out += "<tr>";
//         for (cols=cols1; 0 < cols; cols--) {
//             out += "<td>" + cols + "</td>";
//         }
//         out += "</tr>";
//     }
//     out += "</table>";
//     document.querySelector("#output").innerHTML = out;
// });



// 2) Rotate a String - accept string from user and rotate the string (if "target" entered, then it will move like argett, rgetta, gettar, etc.,
// var str=prompt("Enter The String");
// var str = "Vignesh"
// var str2 = str.split("");

// for (let i = 0; i < str2.length; i++) {
//     str2.push(str2.shift());
//     console.log(str2.join(""));
// }



//3) Remove a character at the specified position of a given string and return the new string - accept the string, and the position to remove from the user


// function remove(str, pos) {
//     if (pos < 0 || pos >= str.length) {
//         console.log("Invalid");
//     }else{

//     st1 = str.slice(0, pos)
//     st2= str.slice(pos + 1);
//     console.log(st1+st2);
// }
// }
// remove("hello world", 5)
// Count the number of vowels in a given string - accept the string from user


// 4) Count the number of vowels in a given string - accept the string from user
// let str ="aeiouss"
// let count = 0;
// let vowels=[];
// for (let i = 0; i < str.length; i++) {
//   if ("aeiouAEIOU".includes(str[i])) {
//     vowels.push(str[i]);
//     count++;
//   }
// }
// console.log(vowels);
// console.log("Number of vowels in the string:", count);



// 5) Swap the first and last elements of a given array of integers


// var arr=[1,2,3,4,5];
// var arr2=[];
// var fir=arr.shift();
// var las=arr.pop();
// var fir1=arr.push(fir);
// var las1=arr.unshift(las);
// console.log(arr);

// 6) Calculate th um of n + n/2 + n/4 + n/8 + .... - accept the number from the user
// var number = 16;
// var count = 0;
// while (0 < number) {
//     count += number;
//     number = Math.floor(number / 2);
// }
// console.log(count);





// 7)  Find longest string from a given array


// function longest(arr){
//     var spl=arr.toString().split(" ");
//     console.log(spl);
//     var temp="";
//     for(i=0;i<spl.length;i++){
//         if(spl[i].length>=temp.length){
//             temp=spl[i];
//         }
//     }
//     console.log(temp);
// }
// longest("I vignesh am");


//  8) Palindrome


// var str1="madam";
// var str2="aaabbb";
// function palin(string) {
//     if(string===string.split("").reverse().join("")&& true){
//         console.log(string+" is a plindrome");
//     }else{
//         console.log(string+" Is not a plindrome");
//     }
// }

// palin(str1);
// palin("deified");
// palin("repaper");
// palin("vignesh");




// 9)  Prime Number (divisble by 1 and its own number)
// for (i = 20; i > 1; i--) {
//     if (i % 2 == 0) {
//         console.log(i/1);
//     }
// }




// 10)  Fibonacci Series (0, 1, 1, 2, 3, 5, 8, 13, 21, 34....)

// var a=0;
// var b=1;
// var temp;
// for(i=1;i<10;i++){
//     console.log(a);
//     temp=a+b;
//     a=b;
//     b=temp
// }

// 11) Factorial of a number (6 = 6 x 5 x 4 x 3 x 2 x 1 = 720)

//  var temp=1
//  for(i=1;i<=6;i++){
//     // console.log(i);
//     temp=temp*i;
//  }
//  console.log(temp);




// 12) Construct a pattern (using loop) - get the total number from user

// for(i=0;i<=5;i++){
//     for(j=1;j<=i;j++){
//     document.write("*");
//     }
//     document.write("<br>");
// }
// for(i=5;i>=0;i--){
//     for(j=5;j>=i;j--){
//     document.write("*");
//     }
//     document.write("<br>");
// }


// 13) Pyramid pattern (using loop)























// 14) Form Validations
// isvalid = true;
// var fname = document.querySelector("#fname");
// var lname = document.querySelector("#lname");
// var email = document.querySelector("#email");

// var fe = document.querySelector("#ferror");
// var le = document.querySelector("#lerror");
// var er = document.querySelector("#Emailerror");

// document.querySelector("form").addEventListener("submit", evant => {
//     fe.style.display = "none"
//     le.style.display = "none"
//     er.style.display = "none"
//     if (fname.value == "") {
//         fe.style.display = "block"
//         fe.style.color = "red"
//         isvalid = false
//     }
//     if (lname.value == "") {
//         le.style.display = "block"
//         le.style.color = "red"
//         isvalid = false
//     }
//     if (email.value == "") {
//         er.style.display = "block"
//         er.style.color = "red"
//         isvalid = false
//     }
//     if (isvalid == false) {
//         evant.preventDefault();
//     }
        // console.log(fname.value);
        // console.log(lname.value);
        // console.log(email.value);
// });





// 15) JavaScript calculator
// 16) Task List (Add, Delete)

// 17) Progress Bar

// let number = document.querySelector("#number");
// document.querySelector("#btn").addEventListener("click", () => {
//     let inputvalue = document.querySelector("#input").value;
//     let count = 0;
//     if (inputvalue == "") {
//         alert("Enter The Value");
//     } else {
//         setInterval(() => {
//             if (count == inputvalue) {
//                 clearInterval();
//             } else {
//                 count++;
//                 number.innerHTML = `${count}%`
//             }
//         }, 250);
//     }
// });































































