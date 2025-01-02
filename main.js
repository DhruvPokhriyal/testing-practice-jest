function capitalize(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
}

function reverseString(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) revStr = revStr + str[i];
    return revStr;
}

function calculator(sign, ...numbers) {
    if (numbers.length == 1) return "Input less than minimum no of inputs";
    switch (sign) {
        case "+":
            return numbers.reduce((total, prev) => total + prev, 0);
        case "-":
            return numbers.reduce((total, prev) => total - prev);
        case "*":
            return numbers.reduce((total, prev) => total * prev, 1);
        case "/":
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] == 0) {
                    return "Invalid Operation!! Division by Zero is not possible";
                }
            }
            return numbers.reduce((total, prev) => total / prev);
    }
}

function caesarCipher(str, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let newLetter = null;
        if (alphabet.includes(str[i].toLowerCase())) {
            let newLetterAbsolute =
                alphabet[(alphabet.indexOf(str[i].toLowerCase()) + shift) % 26];
            newLetter =
                str[i] === str[i].toUpperCase()
                    ? newLetterAbsolute.toUpperCase()
                    : newLetterAbsolute.toLowerCase();
        }
        newLetter = newLetter || str[i];
        newStr = newStr + newLetter;
    }
    return newStr;
}

export { capitalize, reverseString, calculator, caesarCipher };
