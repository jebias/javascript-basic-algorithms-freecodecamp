function factorialize(num) {
    if(num > 0){
      for(let i = num-1; i > 0; i--){
        num *= i;
      }
      return num;
    }
    else{
      return 1;
    }
  }
  
  factorialize(5);