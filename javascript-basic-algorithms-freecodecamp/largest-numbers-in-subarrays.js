function largestOfFour(arr) {
    let large = [];
    for(let i = 0; i < arr.length; i++){
      let max = 0;
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] > max){
          max = arr[i][j];
        }
        // handling negative numbers
        if(arr[i][j] < 0 && max == 0){
          max = arr[i][j];
        }
      }
      large.push(max);
    }
    return large;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);