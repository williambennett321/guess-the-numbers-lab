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
      
  let playerAns
        
  while( playerAns !== this.secretNum) 
  {
    
    playerAns = this.getGuess()
    this.prevGuesses.push(playerAns)
    this.render(playerAns)
    
    
  }

},


  render : function (playerAns)   { 

  if( playerAns >= 0 && playerAns <= 100)
  {
    
    if ( playerAns === this.secretNum) 
    {
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length}!`)
      
    } 
    else if ( playerAns > this.secretNum) 
    {
      alert(`Your guess is too high Previous guesses: ${this.prevGuesses.join(`, `)}`)
      
    } 
    else if ( playerAns < this.secretNum) 
    {
      alert(`Your guess is too low Previous guesses: ${this.prevGuesses.join(`, `)}`)
      
        }
        
      }
  
    }
    
  }



