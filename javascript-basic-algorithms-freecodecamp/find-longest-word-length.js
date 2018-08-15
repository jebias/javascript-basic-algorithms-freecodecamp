function findLongestWordLength(str) { // find the length of the longest word in the string
    let max = 0;
    let temp = str;
    temp = temp.split(" ");
    for(let i = 0; i < temp.length; i++){
      if(temp[i].length > max){
        max = temp[i].length;
      }
    }
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");