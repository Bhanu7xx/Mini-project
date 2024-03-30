const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("#click");
let notes = document.querySelectorAll(".input-box");
console.log("hello");

function showNotes(){
  notescontainer.innerHTML = localStorage.getItem(" notes");
}
showNotes();

function updateStorage(){
  localStorage.setItem("notes", notescontainer.innerHTML); 
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notescontainer.appendChild(inputBox).appendChild(img);
}); // <- Closing parenthesis for addEventListener

notescontainer.addEventListener("click", function(e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") { // Capitalize "P" for paragraph
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function() {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
