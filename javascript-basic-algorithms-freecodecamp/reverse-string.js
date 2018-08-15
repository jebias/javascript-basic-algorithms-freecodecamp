function reverseString(str) {
    let reversed = [];
    let temp = str.split("");
    for(let i = 0; i < str.length; i++){
      reversed.push(temp.pop());
    }
  
    return reversed.join("");// without the "" parameter the letters will be separated by commas
  }
  
  reverseString("hello");