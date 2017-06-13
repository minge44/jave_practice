// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1, num2){
    if (num1 > num2) {
      return num1;
    }
    else{
      return num2;
    }
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num1, num2, num3){
  var max = 0;
    if ((num1 >= num2) && (num1 >= num3)) {
      max = num1;
    }
    else if ((num2 >= num1) && (num2 >= num3)){
      max = num2;
    }
    else{
      max = num3;
    }
    return max;

}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

var findVowel = function(letter) {

    var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length; i++){
        if(letter === vowels[i]){
            return true;
         }
    }

    return false;

};


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(x, y) {
  return (x + y);
}


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(x, y, z) {
  var average=((x+y)+z)/3)
  return(average);
}



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(s) {
  var length = 0;
  while (s[length] !== undefined)
    length++;
  return length;
}



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(x,y) {
  if (y > x)
  return true;
  else{
    return false;
  }
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet("name") {
  return ("Hello " + name)
}


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib ("first", "second", "third", "home") {
  return ("After you hit the ball, you round " + first + "then " + second + "then " + third + "then " + home)
}
