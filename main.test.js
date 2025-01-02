import { capitalize } from "./main";

describe;
test("Capitalize the given string", () => {
    const testCases = [
        { input: "hello World", output: "Hello World" },
        { input: "dummy StrIng", output: "Dummy String" },
    ];
    for (const testCase of testCases) {
        expect(capitalize(testCase.input)).toBe(testCase.output);
    }
});
