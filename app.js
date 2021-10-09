const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses : [],
  getGuess : function() {
    this.playerGuess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    while (this.playerGuess === Number) 
    {
      if (this.playerGuess > 0 && this.playerGuess < 100) 
      {
        return this.playerGuess
      } 
      else 
      {
        return NaN
      } 
    }
  },
  play : function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
  

  
}

