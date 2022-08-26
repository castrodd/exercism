export function decodedValue(args: string[]) {
    const values: any = {
      black: "0",
      brown: "1",
      red: "2",
      orange: "3",
      yellow: "4",
      green: "5",
      blue: "6",
      violet: "7",
      grey: "8",
      white: "9"
    };
   
    if (args[0] in values && args[1] in values) {
       let firstDigit: string = values[args[0].toLowerCase()];
       let secondDigit: string = values[args[1].toLowerCase()];
       return Number(firstDigit + secondDigit);
    } else {
       throw new Error('Value not found in values enum.');
    }
 }