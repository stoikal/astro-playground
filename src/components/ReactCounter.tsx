import React, { useState } from "react";

export default function ReactCounter (): React.JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="bg-amber-700 py-4 px-8 rounded-2xl cursor-pointer"
        onClick={() => setCount(n => ++n)}
      >
        {count}
      </button>
    </div>
  );
}
