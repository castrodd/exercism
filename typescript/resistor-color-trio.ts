export function decodedResistorValue(args: string[]): string {
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
   
    if (args[0] in values && args[1] in values && args[2] in values) {
       let firstDigit: string = values[args[0].toLowerCase()];
       let secondDigit: string = values[args[1].toLowerCase()];
       let baseNumber: string = firstDigit + secondDigit;
       let zeroes: number = Number(values[args[2].toLowerCase()]);
       while (zeroes > 0) {
           baseNumber += "0";
           zeroes--;
       }
       let finalNumber: number = Number(baseNumber);
       let ending: string = "ohms";
       if (finalNumber >= 1000) { 
         finalNumber /= 1000;
         ending = "kiloohms";
       }
       return `${finalNumber} ${ending}`;
    
    } else {
       throw new Error('Value not found in values enum.');
    }
 }
 