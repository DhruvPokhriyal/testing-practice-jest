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
    switch (sign) {
        case "+":
            return numbers.reduce((total, prev) => total + prev, 0);
        case "-":
            return numbers.reduce((total, prev) => total - prev, 0);
        case "*":
            return numbers.reduce((total, prev) => total * prev, 1);
        case "/":
            return numbers.reduce((total, prev) => total / prev, 1);
    }
}

function caesarCipher() {}

export { capitalize, reverseString, calculator, caesarCipher };
