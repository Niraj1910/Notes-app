const notes_container = document.querySelector(".notes-container");
const button = document.querySelector("button");

function showLocalStorageData() {
  notes_container.innerHTML = localStorage.getItem("note");
}

showLocalStorageData();

function saveDataLocalStorage() {
  localStorage.setItem("note", notes_container.innerHTML);
}

button.addEventListener("click", function () {
  const newNote = document.createElement("p");
  const image = document.createElement("img");

  newNote.classList = "input-box";
  newNote.setAttribute("contentEditable", "true");

  image.src = "./images/delete.png";

  notes_container.appendChild(newNote).appendChild(image);

  saveDataLocalStorage();
});

notes_container.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveDataLocalStorage();
  } else if (e.target.tagName === "P") {
    const notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.onkeyup = function () {
        saveDataLocalStorage();
      };
    });
  }
});
