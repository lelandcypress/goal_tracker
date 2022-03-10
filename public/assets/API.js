const createGoal = async () => {
  //bug here
  const goalContent = goalInput.value.trim();

  const response = await fetch("/goals", {
    method: "POST",
    body: JSON.stringify(goalContent),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Goal Greated");
  } else {
    console.log("Something went Wrong");
  }
};
