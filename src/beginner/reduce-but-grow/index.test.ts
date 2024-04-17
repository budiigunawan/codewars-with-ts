import { describe, expect, test } from "@jest/globals";
import grow from ".";

describe("Grow function", () => {
  test("Testing for [1, 2, 3]", () => {
    expect(grow([1, 2, 3])).toEqual(6);
  });
  test("Testing for [4, 1, 1, 1, 4]", () => {
    expect(grow([4, 1, 1, 1, 4])).toEqual(16);
  });
  test("Testing for [2, 2, 2, 2, 2, 2]", () => {
    expect(grow([2, 2, 2, 2, 2, 2])).toEqual(64);
  });
});
