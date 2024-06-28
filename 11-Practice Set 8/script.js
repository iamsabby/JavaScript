//1. Write a program to show different alerts when different buttons are clicked.

let x = () => {
    alert("Hi this is Sabih Ul Hassan")
  }
  
  let y = () => {
    alert("This is the practice set of Chapter 8")
  }
  
  let z = () => {
    alert("On click function working!")
  }
  
  //2. Create a website which is capable of storing bookmarks of your favorite websites using href.
  
  /* Completed in HTML page */
  
  //3. Repeat Q2 using event listeners.
  
  let a = document.getElementById("evt")
  a.addEventListener("click", function() {
    window.location = "http://twitter.com"
  })
  
  //4. Write a javascript program to keep fetching contents of a website (every 5 seconds).
  
  const fetchContent = async (url) => {
    con = await fetch(url);
    let a = await con.json()
    return a
  }
  
  setInterval(async function() {
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
  }, 3000)
  
  
  //5. Create a glowing bulb effect using classlist toggle method in javascript.
  
  setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb")
  }, 300)
  