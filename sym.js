function solution(S) {
let word = S.toLowerCase()
let i = 0;
while(i<Math.floor(word.length/2)) {
  if (word.charAt(i)===word.charAt(word.length-1-i)){
  i++
  }
}
return i
}


console.log(solution("Racecar"))