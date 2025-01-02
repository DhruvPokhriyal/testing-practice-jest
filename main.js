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

    function isAlpha(char) {
        return alphabet.includes(char.toLowerCase());
    }

    function newIndex(char, shift) {
        return (alphabet.indexOf(char.toLowerCase()) + shift) % 26;
    }

    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let newLetter = null;
        if (isAlpha(str[i])) {
            let newLetterAbsolute = alphabet[newIndex(str[i], shift)];
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

function analyzeArray(arr = []) {
    if (arr.length === 0) return "Invalid Array";
    else {
        for (let element of arr) {
            if (typeof element != "number") return "Invalid Array";
        }
    }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
