// // // // // // // // var firstName = prompt("Enter your first name: ");
// // // // // // // // var lastName = prompt("Enter your last name: ");

// // // // // // // // var fullName;
// // // // // // // // fullName = firstName + " " + lastName;
// // // // // // // // document.write(fullName + "<br/>");
// // // // // // // // document.write("Total length of the full name: " + fullName.length  + "<br/>");
// // // // // // // // document.write("Uppercase: " + fullName.toUpperCa se() + "<br/>");
// // // // // // // // document.write("2nd Position of the full name: " + fullName.charAt(2));

// // // // // // // var num1 = prompt("Enter first number : ");
// // // // // // // var num2 = prompt("Enter second number : ");

// // // // // // // num1 = parseInt(num1, 10);
// // // // // // // num2 = parseInt(num2, 10);

// // // // // // // var add, sub, mul, div,mod;

// // // // // // // add = num1+num2;
// // // // // // // sub = num1-num2;
// // // // // // // mul = num1*num2;
// // // // // // // div = num1/num2;
// // // // // // // mod = num1%num2;

// // // // // // // document.write(num1 + " + " + num2 + " = "+ add + "<br/>");
// // // // // // // document.write(num1 + " - " + num2 + " = "+ sub + "<br/>");
// // // // // // // document.write(num1 + " * " + num2 + " = "+ mul + "<br/>");
// // // // // // // document.write(num1 + " / " + num2 + " = "+ div + "<br/>");
// // // // // // // document.write(num1 + " % " + num2 + " = "+ mod + "<br/>");


// // // // // // var num1 = parseInt(prompt("Enter the first number: "));
// // // // // // var num2 = parseInt(prompt("Enter the second number: "));

// // // // // // if(num1%2 == 0 )
// // // // // //     document.write("This is a even Number");
// // // // // // else
// // // // // //     document.write("This is a odd Number");

// // // // // var grade = parseInt(prompt("Enter your grade mark(0-100): "));

// // // // // if(grade>=80)
// // // // //     document.write("Congratulations: A+");
// // // // // else if (70<=grade && grade<80)
// // // // //     document.write("Very good: A");
// // // // // else if (60<=grade && grade<70)
// // // // //     document.write("Good: A-");
// // // // // else if (50<=grade && grade<60)
// // // // //     document.write("You can do better: B");
// // // // // else if (40<=grade && grade<50)
// // // // //     document.write("Not Good: C");
// // // // // else if (33<=grade && grade<40)
// // // // //     document.write("Study More: D");
// // // // // else
// // // // //     document.write("Very Bad: F");

// // // // var digit = parseInt(prompt("Enter a digit (0-9)"));

// // // // switch(digit){
// // // //     case 0:
// // // //         document.write("Zero");
// // // //         break;
// // // //     case 1:
// // // //         document.write("One");
// // // //         break;
// // // //     case 2:
// // // //         document.write("Two");
// // // //         break;
// // // //     case 3:
// // // //         document.write("Three");
// // // //         break;
// // // //     case 4:
// // // //         document.write("Four");
// // // //         break;
// // // //     case 5:
// // // //         document.write("Five");
// // // //         break;
// // // //     case 6:
// // // //         document.write("Six");
// // // //         break;
// // // //     case 7:
// // // //         document.write("Seven");
// // // //         break;
// // // //     case 8:
// // // //         document.write("Eight");
// // // //         break;
// // // //     case 9:
// // // //         document.write("Nine");
// // // //         break;
// // // //     default:
// // // //         document.write("Invalid Digit");
// // // // }


// // // var letter = prompt("Enter a letter: ");

// // // letter = letter.toLowerCase();

// // // switch(letter){
// // //     case "a":
// // //     case "e":
// // //     case "i":
// // //     case "o":
// // //     case "u":
// // //         document.write("Vowel");
// // //         break;
// // //     default:
// // //         document.write("Consonant");
// // // }

// // var num = 1, sum = 0;
// // while (num <=100){
// //     if (num%3== 0 && num%5==0)
// //         sum+=num;
// //     num++;
// // }
// // document.write("Sum = "+ sum)

// var num = Number(prompt("Enter a number: "));

// num>0 ? document.write("Positive") : num<0 ?  document.write("Negative") : document.write("Zero")

var num1 = Number(prompt("Enter the 1st number: "));
var num2 = Number(prompt("Enter the 2nd number: "));
var num3 = Number(prompt("Enter the 3rd number: "));

// num1>num2 ? document.write(num1 + " is larger than " + num2): document.write(num2 + " is larger than " + num1)
num1 > num2 && num1>num3 ? document.write(num1 + " = Num1 is the largest number") : num2>num1 && num2>num3 ? document.write(num2 + " = Num2 is the largest number") : document.write(num3 + " = Num3 is the largest number")