const goalInput = document.getElementById("goal_input");
const goalButton = document.getElementById("goal_button");
const goalListParent = document.getElementById("goal_listParent");
let goalList = [];

function updateLocalStorage(array) {
  localStorage.setItem("goals", JSON.stringify(array));
}

function displayGoals(array) {
  for (let i = 0; i < array.length; i++) {
    const listItem = document.createElement("p");
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
}

goalButton.addEventListener("click", function () {
  goalListParent.innerHTML = "";
  const goalEntry = goalInput.value;
  goalList.push(goalEntry);
  displayGoals(goalList);
  updateLocalStorage(goalList);
  goalInput.value = "";
});

init();
