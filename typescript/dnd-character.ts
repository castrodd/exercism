export class DnDCharacter {
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    hitpoints: number
    
    constructor() {
      this.strength = DnDCharacter.generateAbilityScore()
      this.dexterity = DnDCharacter.generateAbilityScore()
      this.constitution = DnDCharacter.generateAbilityScore()
      this.intelligence = DnDCharacter.generateAbilityScore()
      this.wisdom = DnDCharacter.generateAbilityScore()
      this.charisma = DnDCharacter.generateAbilityScore()
      
      this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
    }
    
    public static generateAbilityScore(): number {
      let rolls: number[] = []
      for (let i = 0; i < 4; i++) {
        rolls.push(this.generateRndInt())
      }
      
      rolls.sort((a, b) => (b - a)).pop()
      return rolls.reduce((a: number, b: number) => a + b)
    }
  
    public static getModifierFor(abilityValue: number): number {
      return Math.floor(((abilityValue - 10)/2))
    }
    private static generateRndInt() {
      return Math.floor(Math.random() * 6) + 1
    }
}
  