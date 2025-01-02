import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from "./main";

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
    describe("multiplication", () => {
        test("Multiply two integer numbers", () => {
            expect(calculator("*", 1, 2)).toBe(2);
        });
        test("Multiply two floating point numbers", () => {
            expect(calculator("*", 2.5, 2.5)).toBeCloseTo(6.25);
        });
        test("Multiply one integer and one floating point numbers", () => {
            expect(calculator("*", 1.5, 2)).toBeCloseTo(3.0);
        });
        test("Multiply multiple numbers", () => {
            expect(calculator("*", 1, 2, 3)).toBe(6);
        });
        test("Multiplication by zero", () => {
            expect(calculator("*", 3, 0)).toBe(0);
        });
    });
    describe("division", () => {
        test("Divide two integer numbers", () => {
            expect(calculator("/", 1, 2)).toBeCloseTo(0.5);
        });
        test("Divide two floating point numbers", () => {
            expect(calculator("/", 2.5, 2.5)).toBeCloseTo(1.0);
        });
        test("Divide one integer and one floating point numbers", () => {
            expect(calculator("/", 1.5, 2)).toBeCloseTo(0.75);
        });
        test("Divide multiple numbers", () => {
            expect(calculator("/", 1, 2, 3)).toBeCloseTo(0.166);
        });
        test("Division by zero", () => {
            expect(calculator("/", 3, 0)).toBe(
                "Invalid Operation!! Division by Zero is not possible"
            );
        });
    });
});

describe("caesarCipher function", () => {
    test("Wrapping check", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc");
    });
    test("Case Preservation", () => {
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });
    test("Punctuation test", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });
});

describe("analyzeArray function", () => {
    test("array of numbers check", () => {
        expect(analyzeArray()).toEqual("Invalid Array");
        expect(analyzeArray([1, null, "foo"])).toEqual("Invalid Array");
        expect(analyzeArray([])).toEqual("Invalid Array");
    });
    test("simple array check", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });
    test("repetitive element array check", () => {
        expect(analyzeArray([1, 1, 2, 3])).toEqual({
            average: 1.75,
            min: 1,
            max: 8,
            length: 6,
        });
    });
    test("all same element array check", () => {
        expect(analyzeArray([1, 1, 1, 1])).toEqual({
            average: 1,
            min: 1,
            max: 1,
            length: 4,
        });
    });
});
