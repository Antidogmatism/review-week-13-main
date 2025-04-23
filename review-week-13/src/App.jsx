import React, { useState } from "react";
import FruitList from "./components/FruitList";
import Message from "./components/Message";

function App() {
  const [totalFruits, setTotalFruits] = useState(0);
  // This is the goal for the number of fruits to be eaten per day
  const goal = 5;

  const handleTotalChange = (newTotalFruits) => {
    setTotalFruits(newTotalFruits);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>🍎 Healthy Eating Tracker</h1>
      <FruitList
        fruits={["Feijoa", "Apple", "Avocado", "Orange", "Banana"]}
        onTotalChange={handleTotalChange}
      />
      <Message totalFruits={totalFruits} goal={goal} />
      <h2>Eating Well is Important</h2>
      <p>
        Eating well is important for your health. It can help you maintain a
        healthy weight, reduce the risk of chronic diseases, and improve your
        overall well-being.
      </p>
      <p>
        Eating a variety of fruits and vegetables is an important part of a
        healthy diet. Fruits and vegetables are rich in vitamins, minerals, and
        antioxidants that can help protect your body from disease. They are also
        low in calories and high in fiber, which can help you feel full and
        satisfied.
      </p>
    </div>
  );
}

export default App;
