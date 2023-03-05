function extraLongFactorials(n) {
    
    // a factorial is the product of all positive integers less than or equal to n. 
    let result = 1;
//to disinclude the zero from the for loop and start from the n value downward
    for (let i = n; i > 0; i--) {
        //BigInt is important here to handle extralong intgers
      result = BigInt(result) * BigInt(i);
    }
    //turning to string results in a long intger no power integer
    console.log(result.toString());
  }
  