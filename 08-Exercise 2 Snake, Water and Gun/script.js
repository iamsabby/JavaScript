//Snake, Water and Gun

//1. Use javascript to create a game of snake, water and gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert. Use confirm and prompt wherever required.

let runAgain = true
while (runAgain != false) {
  let choice = Number.parseInt(prompt("Enter your number\n1. S\n2. W\n3. G"))
  const comp = Math.floor((Math.random() *3)+1) 
  // 1 = S
  // 2 = W
  // 3 = G
  if (choice == comp) {
    alert("Try Again! It was a draw")
  }
  else if (choice == 1 && comp == 2) {
    alert("You Won! Snake drinks the water")
  }
  else if (choice == 3 && comp == 2) {
    alert("You Lost! Gun is lost in the water")
  }
  else if (choice == 2 && comp == 1) {
    alert("You Lost! Snake drinks the water")
  }
  else if (choice == 3 && comp == 1) {
    alert("You Won! Snake is killed by the gun")
  }
  else if (choice == 1 && comp == 3) {
    alert("You Lost! Snake is killed by the gun")
  }
  else if (choice == 2 && comp == 3) {
    alert("You Won! Gun is lost in the water")
  }
  else {
    alert("Wrong Input")
  }
  runAgain = confirm("Do you want to play again?")
}