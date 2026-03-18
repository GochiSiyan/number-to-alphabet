import { assertEquals } from "@std/assert";
import { numberToAlphabet, alphabetToNumber } from "./mod.ts";

Deno.test("Converts numbers to alphabet correctly", () => {
  assertEquals(numberToAlphabet(0), "");
  assertEquals(numberToAlphabet(1), "A");
  assertEquals(numberToAlphabet(26), "Z");
  assertEquals(numberToAlphabet(27), "AA");
  assertEquals(numberToAlphabet(702), "ZZ");
});

Deno.test("Converts alphabet to numbers correctly", () => {
  assertEquals(alphabetToNumber("A"), 1);
  assertEquals(alphabetToNumber("AA"), 27);
});