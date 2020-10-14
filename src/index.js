const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let compareArr = expr.match(/(.{10})/g);

  return compareArr
    .map((elem) =>
      elem.includes("**********")
        ? (elem = " ")
        : elem
            .split(" ")
            .map((modifyElem) => {
              let tempStr = "";
              for (let i = 0; i < modifyElem.length; i += 2) {
                let doubleIndex = modifyElem.slice(i, i + 2);
                if (doubleIndex === "11") {
                  tempStr = tempStr.concat("-");
                } else if (doubleIndex === "10") {
                  tempStr = tempStr.concat(".");
                } else tempStr = tempStr.concat("");
              }
              return (modifyElem = tempStr);
            })
            .map((morseArr) => (morseArr = MORSE_TABLE[morseArr]))
    )
    .join("");
}

module.exports = {
  decode,
};
