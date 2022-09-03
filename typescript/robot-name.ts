export class Robot {
  private currentName: string = ''
  private static names = new Set<string>()
     
  constructor() {
    this.setName()
  }
  
  private getLetter(): string {
    return String.fromCodePoint(Math.ceil(Math.random()*26)+64)
  }

  private getNumber(): string {
    return String.fromCodePoint(Math.ceil(Math.random()*10)+47)
  }

  private setName(): void {
    this.currentName = ''
    while (this.currentName === '') {
      let letters = ''
      let numbers = ''

      while (letters.length < 2) {
        letters += this.getLetter()
      }

      while(numbers.length < 3) {
        numbers += this.getNumber()
      }

      let tempName = `${letters}${numbers}`
      if (!Robot.names.has(tempName)) {
        Robot.names.add(tempName)
        this.currentName = tempName
      } 
    }
  }

  public get name(): string {
    return this.currentName
  }

  public resetName(): void {
    this.setName()
  }

  public static releaseNames(): void {
    Robot.names.clear()
  }
}
