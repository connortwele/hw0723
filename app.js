//Sum All Numbers in a Range
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum += i;
    }
    return sum;
  }
  
  sumAll([1, 4]);
  //code along
  // DOM Manipulation: Selecting & changing website elements

var div1 = document.getElementById('div1');

var uniycle = document.getElementsByClassName('unicycle');

var paragraphs = document.getElementsByTagName('p');

var queryUnicycle = document.querySelector('.unicycle');

var queryAll = document.querySelectorAll('.unicycle, #div2');

var text = "<h1>Hello World</h1>";

queryUnicycle.textContent = text;

// for (i = 0; i < queryAll.length; ++i) {
//   queryAll[i].innerHTML = text;
// }
  
  //Sum All Odd Fibonacci Numbers

  function sumFibs(num) {
    var prevNum = 0;
    var curNum = 1;
    var result = 0;
    while (curNum <= num){
      if (curNum % 2 !== 0){
        result += curNum;
      }
      curNum += prevNum
      prevNum = curNum - prevNum
    }
    return result;
    }
    
    sumFibs(4);
    


  //Sorted Union
  function uniteUnique(arr1,arr2,arr3) {
    var finalArray = [];
    for (var i = 0; i < arguments.length; i++){
      var arrayArguments = arguments[i];
      for (var j = 0; j < arrayArguments.length; j++){
        var indexValue = arrayArguments[j]
        if (finalArray.indexOf(indexValue)<0)
        finalArray.push(indexValue);
      }
   
    }
    return finalArray
   }
   
   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

