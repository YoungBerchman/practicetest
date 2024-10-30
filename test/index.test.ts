import { addUp, newStudent, objData, returnZero } from "../index";
import { nameShower } from "../index";
import { extract } from "../index";
import { dataFN } from "../index";

describe("to add up two numbers, say 1 and 3", () => {
  //arrange
  test("1 + 3 to equal 4", () => {
    // affirm
    let res = addUp(1, 3);

    //assert
    expect(1 + 3).toBe(4);
  });

  test("name will be Peter", () => {
    let res = nameShower("Peter");

    expect(res).toBe("Peter");
  });

  test("to always return zero", () => {
    let result = returnZero(8);

    expect(result).toBe(0);
    expect(result).not.toBeTruthy();
    // expect(result).not.toBeFalsy();
    // expect(result).not.toBeNull();
    // expect(result).not.toBeUndefined();
    // expect(result).not.toBeNaN();
    // expect(result).not.toBeGreaterThan(0);
  });

  test("Peter exist in the Object", () => {
    let obj = objData("Isreal");

    expect(obj).toEqual({ name: "Isreal", id: 3 });
  });

  test("Check if codelab is included", () => {
    let obj = extract("Isreal");

    expect("Codelab").not.toMatch(/p/);
  });

  test("testing for the increment of student list", () => {
    let obj = newStudent("Isreal");
    let value = obj.length;
    expect(obj).toContain("Isreal");
    expect(value).toBeGreaterThan(value - 1);
  });

  test("testing for the reverse of 493", () => {
    let input = 493;
    let obj = dataFN(input);

    expect(input).not.toBeNaN();
    expect(input).toBeTruthy();
    expect(input).toBeNull();
    expect(obj).toBe(295);
  });
});
