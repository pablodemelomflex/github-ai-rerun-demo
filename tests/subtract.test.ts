import { subtract } from "../src/subtract";
import { test, expect } from "@jest/globals";

test("subtract works", () => {
  expect(subtract(5, 3)).toBe(2);
});
