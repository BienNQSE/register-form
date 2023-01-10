import React from "react";
import "./index.scss";

function CountDisplay() {
  const count = 0;
  return <div>The count is: {count}</div>;
}

function Counter() {
  const setCount = () => {};
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      className="p-4 rounded-lg text-white font-semibold bg-purple-500"
      onClick={increment}
    >
      Increment count
    </button>
  );
}

const App = () => {
  return (
    <div className="p-10 flex items-center justify-center gap-x-5">
      <CountDisplay></CountDisplay>
      <Counter></Counter>
    </div>
  );
};

export default App;
