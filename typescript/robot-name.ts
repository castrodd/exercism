export class Robot {
  private robotName: string = ''
  private static namesSet = new Set<string>()
     
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
    this.robotName = ''
    while (this.robotName === '') {
      let letters = ''
      let numbers = ''

      while (letters.length < 2) {
        letters += this.getLetter()
      }

      while(numbers.length < 3) {
        numbers += this.getNumber()
      }

      let tempName = `${letters}${numbers}`
      if (!Robot.namesSet.has(tempName)) {
        Robot.namesSet.add(tempName)
        this.robotName = tempName
      } 
    }
  }

  public get name(): string {
    return this.robotName
  }

  public resetName(): void {
    this.setName()
  }

  public static releaseNames(): void {
    Robot.namesSet.clear()
  }
}
