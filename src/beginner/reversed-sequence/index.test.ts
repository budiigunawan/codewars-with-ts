import { describe, expect, test } from "@jest/globals";
import reverseSeq from ".";

describe("Reversed sequence function", () => {
  test("Testing for 5", () => {
    expect(reverseSeq(5)).toEqual([5, 4, 3, 2, 1]);
  });
});
