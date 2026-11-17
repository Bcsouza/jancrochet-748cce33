import { describe, expect, test } from "bun:test";
import { courseOffer, courseSavings } from "./course-offer";

describe("complete course Black Friday offer", () => {
  test("original price is R$ 810", () => {
    expect(courseOffer.originalPrice).toBe(810);
  });
  test("promotional price remains R$ 299", () => {
    expect(courseOffer.price).toBe(299);
  });
  test("savings against original price are R$ 511", () => {
    expect(courseSavings).toBe(511);
  });
});