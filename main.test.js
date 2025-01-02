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
    test("Minimum no of input", () => {
        expect(calculator("+", 1)).toBe("Input less than minimum no of inputs");
        expect(calculator("-", 1)).toBe("Input less than minimum no of inputs");
        expect(calculator("*", 1)).toBe("Input less than minimum no of inputs");
        expect(calculator("/", 1)).toBe("Input less than minimum no of inputs");
    });
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
        test("add multiple numbers", () => {
            expect(calculator("+", 1, 2, 3)).toBe(6);
        });
    });
    describe("subtraction", () => {
        test("subtract two integer numbers", () => {
            expect(calculator("-", 1, 2)).toBe(-1);
        });
        test("subtract two floating point numbers", () => {
            expect(calculator("-", 2.5, 2.5)).toBeCloseTo(0.0);
        });
        test("subtract one integer and one floating point numbers", () => {
            expect(calculator("-", 1.5, 2)).toBeCloseTo(-0.5);
        });
        test("subtract multiple numbers", () => {
            expect(calculator("-", 1, 2, 3)).toBe(-4);
        });
    });
});
