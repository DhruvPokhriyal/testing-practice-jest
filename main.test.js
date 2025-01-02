import { capitalize, reverseString, calculator, caesarCipher } from "./main";

describe("capitalize function", () => {
    test("Capitalize the given string", () => {
        const testCases = [
            { input: "hello World", output: "Hello World" },
            { input: "dummy StrIng", output: "Dummy String" },
        ];
        for (const testCase of testCases) {
            expect(capitalize(testCase.input)).toBe(testCase.output);
        }
    });
    test("Capitalize single character", () => {
        expect(capitalize("m")).toBe("M");
    });
});

describe("reverseString function", () => {
    test("reverse simple word", () => {
        const testCases = [
            { input: "uwu", output: "uwu" },
            { input: "dummy", output: "ymmud" },
        ];
        for (const testCase of testCases) {
            expect(reverseString(testCase.input)).toBe(testCase.output);
        }
    });
    test("reverse complex string", () => {
        const testCases = [
            { input: "12 Data !@", output: "@! ataD 21" },
            { input: "#214 ErE", output: "ErE 412#" },
        ];
        for (const testCase of testCases) {
            expect(reverseString(testCase.input)).toBe(testCase.output);
        }
    });
});

describe("calculator function", () => {
    describe("addition", () => {
        test("add two integer numbers", () => {
            expect(calculator("+", 1, 2)).toBe(3);
        });
        test("add two floating point numbers", () => {
            expect(calculator("+", 2.5, 2.5)).toBeCloseTo(5.0);
        });
        test("add one integer and one floating point numbers", () => {
            expect(calculator("+", 1.5, 2)).toBeCloseTo(3.5);
        });
    });
});
