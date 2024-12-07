export function printCurrencyFormat(value) {
  const [int, dec] = String(value).split(".");

  let newInt = "";

  const reversedInt = int.split("").reverse().join("");

  for (let i = 1; i <= reversedInt.length; i++) {
    newInt += reversedInt[i - 1];
    if (i % 3 === 0 && i !== reversedInt.length) {
      newInt += ",";
    }
  }

  newInt = newInt.split("").reverse().join("");

  return dec ? "$" + newInt + "." + dec : "$" + newInt;
}

export function printPercentageFormat(value) {
  return value < 0 ? "-%" + -value : "%" + value;
}
