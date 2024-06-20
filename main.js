let input = document.getElementById("input-box");
let list = document.querySelector("#list-container");
console.log(input);
console.log(list);

function addtask() {
  if (input.value === "") {
    alert("You must enter a task.");
  } else {
    let li = document.createElement("LI");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("SPAN");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    save();
  }
  input.value = "";
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      save();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      save();
    }
  },
  false
);

function save() {
  localStorage.setItem("data", list.innerHTML);
}

function show() {
  list.innerHTML = localStorage.getItem("data");
}

show();
