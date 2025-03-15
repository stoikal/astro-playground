import React, { useState } from "react";

export default function ReactCounter (): React.JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(n => ++n)}>
        {count}
      </button>
    </div>
  );
}
