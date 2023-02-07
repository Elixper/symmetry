// function solution(S) {
// let [...word] = S.toLowerCase()
// console.log(word)
// const indexOfFirst = word.indexOf("a");
// console.log(indexOfFirst)
// console.log([...word])
// let i = 0;
// while(i<Math.floor(word.length/2)) {
//   if (word.charAt(i)===word.charAt(word.length-1-i)){
//   i++
//   }
// }
// return i
// }


// console.log(solution("Racecar"))

function solution2(S) {
  let [...word] = S.toLowerCase();
  const indexOfFirst = S.indexOf("a");
  console.log(indexOfFirst)
  const indexOfLast = S.lastIndexOf("a");
  console.log(indexOfLast)
  return word.find(el=> word.indexOf(el) !==word.lastIndexOf(el))
  }
  
  console.log(solution2("codility"))


  function solution(S) {
    let [...word] = S.toLowerCase();
    return word.find(el=> word.indexOf(el) !==word.lastIndexOf(el))
    }

  function getLargestNumberIndex(arr) {
console.log(arr.indexOf(Math.max(...arr)))
    }
    
  console.log("getLargestNumberIndex", getLargestNumberIndex([7, 1, 4, 12, 9])); // Expects 3

  function stringIncludes(str1,str2) {
    let temporaryString = str1.toLowerCase();
    return temporaryString.includes(str2.toLowerCase())
    }
    console.log(
      "stringIncludes",
      stringIncludes("I drove to New York in a van with my friend", "new")
    );