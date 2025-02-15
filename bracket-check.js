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
        /**
         * Hvis karakteren er en åpen parentes, 
         * legg den til i openBrackets
         */
        if (Object.values(brackets).includes(char)) {
            openBrackets.push(char);
            continue;
        }
        /**
         * Hvis karateren er en lukket parentes,
         * pop siste element fra openBrackets.
         * Return false dersom de ikke passer sammen.
         */
        if (brackets[char]) {
            if (brackets[char] != openBrackets.pop()) {
                return false;
            }
        }
    }
    /**
     * Return true dersom loopen blir ferdig.
     */
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