const fs = require('fs');

function main() {
    const filepath = process.argv[2];
    fs.readFile(filepath, 'utf8', (err, text) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(text);
        console.log(checkArray(text));
        console.log(checkRecursive(text));
    });
}

function checkArray(str) {
    const brackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    const openBrackets = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (Object.values(brackets).includes(char)) {
            openBrackets.push(char);
            continue;
        }
        if (brackets[char]) {
            if (brackets[char] != openBrackets.pop()) {
                return false;
            }
        }
    }
    return true;
}

function checkRecursive(str) {
    const brackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let index = 0;
    function check(openBracket) {
        let ok = true;
        while (index < str.length && ok) {
            const char = str[index++];
            if (brackets[char]) {
                return brackets[char] == openBracket;
            }
            if (Object.values(brackets).includes(char)) {
                ok = check(char);
            }
        }
        return ok;
    }
    return check("");
}

main();