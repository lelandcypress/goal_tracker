const createGoal = async () => {
  const goalContent = goalText.value;
  if (goalContent) {
    const response = await fetch("/", {
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
  }
};
