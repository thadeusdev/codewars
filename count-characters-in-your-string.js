function count (string) {  
    // The function code should be here
    let charCount = {}
    for (let i=0; i<string.length; i++){
        let char = string[i];
        if (charCount[char]){
            charCount[char]++
        }else{
            charCount[char] = 1
        }
    }
     return charCount;
  }
  console.log(count("aba"))
// { a: 2, b: 1 }
