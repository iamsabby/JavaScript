//Practice Set 10

//1. Use a free API from the internet and feed your app with live data
let url = "https://dummyjson.com/products";
fetch(url)
  .then((v) => v.json())
  .then((data) => {
    let products = data.products; // Extract the products array
    let ihtml = "";
    products.forEach((item) => {
      ihtml += `
      <div class="card" style="width: 18rem;">
        <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">Description: ${item.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
    });
    let cardContainer = document.getElementById("cardContainer"); // Ensure this element exists
    cardContainer.innerHTML = ihtml;
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

//2. Create a note saving app which stores your note to localStorage

let a = prompt("Enter Your Note: ");
if (a) {
  localStorage.setItem("note", a);
}

//3. Repeat the last question and fetch the note which was saved

let n = localStorage.getItem("note");
if (n) {
  alert("Your saved note: " + n);
} else {
  alert("No note found.");
}


//4. Delete the note in the previous question  

// alert(n)
// let n = localStorage.getItem("note");
if (n) {
  let c = confirm("Do you want to delete your note?");
  if (c) {
    localStorage.removeItem("note");
    alert("Note deleted.");
  } else {
    alert("Note not deleted.");
  }
} else {
  alert("No note found to delete.");
}
