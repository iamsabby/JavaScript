/*1. elem.innerHTML is used to populat a div with HTML. Search online about this method and create a website with a 
div tag containing a random joke given an array of jokes. 
Use Math.random and fetch jokes from the internet (use any website to create the array) your own API. 
Your website should show a random joke on every reload. Min length of your jokes array should be 10.*/

let jokes = [`Why did the salamander go to Hollywood?\nTo make newt movies!`,`Did you hear the one about the New York Jets cocktail?\nTwo of them, and you forget what Joe Namath.`,`Why did the veterinarian prescribe birth-control pills for dogs?\nIt’s part of an anti-litter campaign.`,`Why don’t pirates take a shower before they walk the plank?\nThey just wash up on shore.`,`On what grounds did the police arrest the devil?\nThey got him on possession.`,`How many telemarketers does it take to change a lightbulb?\nOnly one, but he has to do it while you are eating dinner.`,`What did one fish in a tank say to the other fish in the tank?\n“Do you know how to drive this thing?”`,`What do rich people say when they tickle babies?\n“Gucci, Gucci, goo.”`,`How many therapists does it take to change a lightbulb?\nOnly one, but the lightbulb has to want to change.`,`Why don’t anteaters ever get sick?\nTheir anty-bodies keep them healthy.`,`How many gorillas does it take to change a lightbulb?\nJust one … but it takes a whole lot of lightbulbs.`,`Who was the roundest knight in King Arthur’s court?\nSir Cumference.`,`Why do cemeteries have fences around them?\nBecause everyone’s dying to get in.`,`How many optometrists does it take to change a lightbulb?\nIs it one or two? One … or two?`,`What do you give a man who has everything?\nPenicillin.`,`What kind of felines can bowl?\nAlley cats.`,`Why did the man bring his watch to the bank?\nHe wanted to save time.`,`What’s the difference between a hippo and a Zippo?\nOne weighs a ton, and the other is a little lighter.`,`Did you hear about the guy who got the left side of his body amputated?\nHe’s all right now.`]

let call = () => {
    let haha = jokes[Math.floor(Math.random() * 10)];
    alert(haha)
}
// prompt("1. Yes\n2. Yes")
// alert(call)