export class Robot {
  private currentName: string
  private static names: Set<string>
     
  constructor() {
    Robot.names = new Set<string>()
    this.currentName = this.setName()
  }
  
  private getLetter(): string {
    return String.fromCodePoint(Math.ceil(Math.random()*26)+64)
  }

  private getNumber(): string {
    return String.fromCodePoint(Math.ceil(Math.random()*10)+47)
  }

  private setName(): string {
    this.currentName = ''

    for (let chars = 0; chars < 2; chars++) {
      this.currentName += this.getLetter()
    }

    for (let chars = 0; chars < 3; chars++) {
      this.currentName += this.getNumber()
    }

    if (Robot.names.has(this.currentName)) {
      this.setName()
    }

    Robot.names.add(this.currentName)
    return this.currentName
  }

  public get name(): string {
    return this.currentName
  }

  public resetName(): void {
    this.currentName = this.setName()
  }

  public static releaseNames(): void {
    Robot.names.clear()
  }
}
