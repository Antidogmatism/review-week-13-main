import React, { useState } from "react";

function App() {
  const [totalFruits, setTotalFruits] = useState(0);
  // This is the goal for the number of fruits to be eaten per day
  const goal = 5;

  const handleTotalChange = (newTotalFruits) => {
    setTotalFruits(newTotalFruits);
    if (newTotalFruits >= goal) {
      alert("Congratulations! You've reached your goal!");
    } else {
      alert(`Keep going! ${goal - newTotalFruits} to go!`);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Daily Goal: {goal}</h2>
      <p>Progress: {totalFruits}</p>
      <p>
        <strong>
          {totalFruits >= goal ? "Goal achieved!" : "Keep pushing!"}
        </strong>
      </p>
      <button onClick={() => handleTotalChange(totalFruits + 1)}>
        Add a fruit
      </button>
    </div>
  );
}

export default App;
