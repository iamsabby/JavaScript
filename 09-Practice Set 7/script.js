//1. Create a navbar and change the color of its first element to red.
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red"

//2. Create a table without tbody. Now use "view page source" button to check whether it has a tbody or not.

/*  ANS: NO  */

//3. Create an element with 3 children. Now change the color of first and last element to green.
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green"

//4. Write a javascript code to change background of all <li> tags to cyan.
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "cyan"
})

//5. Which of the following is used to look for the farthest ancestor that matches a given CSS selector.
//  a)matches  b)closest  c)contains  d)none of these

/*   d) None of these
because from the options no one tells the farthest ancestors
*/