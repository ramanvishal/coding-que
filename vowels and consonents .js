function getVowelsAndConsonant(str) {
    let vowelsCount = 0;
    let consonantCount = 0;
    let string = str.toString();
    for (let i = 0; i <= string.length - 1; i++) {
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
      else if (string.charAt(i) >= 'a' && string.charAt(i)<= 'z'){
        consonantCount +=1;
      }
    }
    console.log(`No of Vowels:- ${vowelsCount}`);
    console.log(`No of consonant:- ${consonantCount}`);
}
