const value: string = process.argv[process.argv.length - 1];
const pattern: string = ".(***.). ***.-****"

const patternParts: string[] = pattern.split("");
const valueParts: string[] = value.split("");
let valueIndex: number = 0;
let forcePush: boolean = false;

const result: string[] = patternParts.reduce(
  (acc: string[], current: string) => {
    if(forcePush) {
      acc.push(current)
      forcePush = false;
    } else if(current === "*") {
      acc.push(valueParts[valueIndex])
      valueIndex++;
    } else if (current === ".") {
      forcePush = true;
    } else {
      acc.push(current)
    }
    return acc;
  }
, [])

console.log(result.join(""))