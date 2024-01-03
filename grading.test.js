const { problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problem10 } = require('./index');

test("", async function() {
  expect(problem1()).toBe("1,2,3,4,5,6,7,8,9,10");
});

test("", async function() {
  expect(problem2()).toBe("2,4,6,8,10");
});

test("", async function() {
  expect(problem3(1121)).toBe(4);
  expect(problem3(34)).toBe(2);
  expect(problem3(34334565)).toBe(8);
});

test("", async function() {
  expect(problem4(741)).toBe(12);
  expect(problem4(1438)).toBe(16);
});

test("", async function() {
  expect(problem5([10,5,3,7,45,2])).toBe(45);
  expect(problem5([1,52,32,73,5,12])).toBe(73);
});

test("", async function() {
  expect(problem6("turtle")).toBe(1);
  expect(problem6("beet")).toBe(2);
  expect(problem6("eeeje")).toBe(4);
});

test("", async function() {
  expect(problem7()).toBe("10,9,8,7,6,5,4,3,2,1");
});

test("", async function() {
  expect(problem8("beef")).toBe("biif");
  expect(problem8("eaea")).toBe("iaia");
});

test("", async function() {
  expect(problem9(1)).toBe(1);
  expect(problem9(6)).toBe(720);
  expect(problem9(3)).toBe(6);
});
