import React from "react";

import Grid from "lib/Grid";

const rand = Math.random;

const gridWithBombs = Grid.make(100, () => rand() >= 0.9).snapshot();
const grid = gridWithBombs;

export default function App() {
  return <div>{grid}</div>;
}
