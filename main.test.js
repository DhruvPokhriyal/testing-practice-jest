import { capitalize } from "./main";

test("Capitalize the given string", () => {
    expect(capitalize("hello World")).toBe("Hello World");
});
