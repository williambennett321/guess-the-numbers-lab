const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  getGuess: function () {

    let playerGuess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)

    let parseNum = parseInt(playerGuess)

    return parseNum

  },



      
      play: function() {
        this.secretNum = Math.floor(Math.random() *
          (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
          let playerAns = this.getGuess()
    
      while(this.playerGuess !== this.secretNum) 
      {
        this.prevGuesses.push(this.playerAns)
        
        this.render()

        return this.getGuess()


      }}
    
    
    render : function ()   { 
        while (playerGuess >= 0 && playerGuess <= 100) {

    if (playerGuess === this.secretNum) 
    {
      alert(`Congrats! You guessed the number in ${this.prevGuesses}!`)
    } 
      else if (playerGuess > this.secretNum) 
      {
        alert(`Your guess is too high Previous guesses: ${this.prevGuesses}`)
      } 
      else if (playerGuess < this.secretNum) 
      {
        alert(`Your guess is too low Previous guesses: ${this.prevGuesses}`)

      }
}
}
      

  
  

  


