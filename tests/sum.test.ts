// tests/sum.test.ts
import { sum } from "../src/sum";
import { test, expect } from "@jest/globals";

test("sum works", () => {
  expect(sum(2, 3)).toBe(5);
});