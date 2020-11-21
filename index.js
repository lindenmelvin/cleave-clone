var value = process.argv[process.argv.length - 1];
var pattern = ".(***.). ***.-****";
var patternParts = pattern.split("");
var valueParts = value.split("");
var valueIndex = 0;
var forcePush = false;
var result = patternParts.reduce(function (acc, current) {
    if (forcePush) {
        acc.push(current);
        forcePush = false;
    }
    else if (current === "*") {
        acc.push(valueParts[valueIndex]);
        valueIndex++;
    }
    else if (current === ".") {
        forcePush = true;
    }
    else {
        acc.push(current);
    }
    return acc;
}, []);
console.log(result.join(""));
