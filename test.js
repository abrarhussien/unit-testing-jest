"use strict";

import {
  sum,
  isPalindrome,
  letterNumber,
  area,
  Reverse,
  startsWith,
  Second_Greatest_Lowest,
  abc,
  substrings,
  shuffle,
  makeid,
} from "./index";

test("sum", () => {
  expect(sum(1, 2)).toBe(3);
});

test("palindrome ", () => {
  expect(isPalindrome("ghhG", false)).toBeTruthy();
});

test("letterNumber count number of letter in astring ", () => {
  expect(letterNumber("aaAdda", "A")).toBe(4);
});

test("area calculate circle area ", () => {
  expect(area(1)).toBeCloseTo(3.14);
});

test("reverse reverses a string ", () => {
  expect(Reverse("123456")).toBe("654321");
});

test("startsWith return elements start with a letter  ", () => {
  expect(startsWith(["abrar", "mmmm", "aaaaa", "any", "babb"], "a")).toEqual([
    "abrar",
    "aaaaa",
    "any",
  ]);
});

test("Second_Greatest_Lowest return the second greatest and lowest numbers ", () => {
  expect(Second_Greatest_Lowest([6, 22, 9, 33, 83, 26, 9, 1])).toEqual([6, 33]);
});

test("abc returns its name", () => {
  expect(abc()).toBe("abc");
});

test("substrings generates all combinations of a string  ", () => {
  expect(substrings("dog")).toContain("do");
});

test("shuffle shuffles an array ", () => {
  const mathSpy = jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(2 / 3)
    .mockReturnValueOnce(2 / 2)
    .mockReturnValueOnce(1 / 1);
  expect(shuffle([1, 2, 3])).toEqual([3, 1, 2]);
  expect(mathSpy).toHaveBeenCalledTimes(3);
  mathSpy.mockRestore();
});

test("makeid make an uniqe id", () => {
  const mathSpy = jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(1 / 62)
    .mockReturnValueOnce(1 / 62)
    .mockReturnValueOnce(2 / 62);
  expect(makeid(3)).toBe("BBC");
  expect(mathSpy).toHaveBeenCalledTimes(3);
  mathSpy.mockRestore();
});
