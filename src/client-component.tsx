"use client";

import { useState } from "react";

export const ClientComponent = () => {
  const [number, setNumber] = useState(1);

  return (
    <button
      onClick={() => {
        console.log("adding one");
        setNumber((v) => v + 1);
      }}
    >
      +1 to {number}
    </button>
  );
};
