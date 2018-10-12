function getStartNumber() {
    return Math.floor(Math.random() * (121 - 18)) + 18;
  }

function start(){
    var startNumber = getStartNumber()
    console.log(startNumber) 
    var buttonNumbs = []

    while(buttonNumbs.length < 4){
        var randomNumber = Math.floor(Math.random() * (12 - 0)) + 1;
        if(buttonNumbs.indexOf(randomNumber) > -1) continue;
        buttonNumbs[buttonNumbs.length] = randomNumber;

        console.log(buttonNumbs)
    }
}





start()
