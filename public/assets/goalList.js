const goalInput = document.getElementById("goal_input");
const goalButton = document.getElementById("goal_button");
const goalListParent = document.getElementById("goal_listParent");
const fateButton = document.getElementById("fateButton");
const goalText = document.getElementById("goalText");
const motivateMe = document.getElementById("motivateMe");
const calendar = document.getElementById("date");
const today = new Date();
var date =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

let goalList = [];

function decideMyFate() {
  let randomLength = goalList.length;
  let random = Math.floor(Math.random() * randomLength);
  let selectedGoal = goalList[random];
  if (!selectedGoal) {
    goalText.innerHTML = "Love the enthusiasm, but enter some goals first!";
  } else {
    goalText.innerHTML = selectedGoal;
  }
}

function generateQuote() {
  let randomLength = inspiration.length;
  let random = Math.floor(Math.random() * randomLength);
  let selectedQuote = inspiration[random];
  motivateMe.innerHTML = selectedQuote;
}

function updateLocalStorage(array) {
  localStorage.setItem("goals", JSON.stringify(array));
}

function displayGoals(array) {
  for (let i = 0; i < array.length; i++) {
    const listItem = document.createElement("p");
    listItem.classList.add("addedGoal");
    listItem.textContent = array[i];
    goalListParent.appendChild(listItem);
  }
}

function init() {
  const savedGoals = JSON.parse(localStorage.getItem("goals"));
  if (savedGoals != null) {
    goalList = savedGoals;
  }
  displayGoals(goalList);
  calendar.innerHTML = date;
}

goalInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    goalButton.click();
  }
});

goalButton.addEventListener("click", function () {
  const goalEntry = goalInput.value;
  if (goalEntry === "") {
    return;
  } else {
    goalListParent.innerHTML = "";
    goalList.push(goalEntry);
    displayGoals(goalList);
    updateLocalStorage(goalList);
    goalInput.value = "";
  }
});

fateButton.addEventListener("click", function () {
  motivateMe.innerHTML = "";
  decideMyFate();
  generateQuote();
});

init();
