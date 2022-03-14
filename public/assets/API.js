const createGoal = async () => {
  //bug here
  const goalName = goalInput.value.trim();

  const response = await fetch("/goals", {
    method: "POST",
    body: JSON.stringify({ name: goalName }),
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
