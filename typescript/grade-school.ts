interface SchoolRoster {
  [index: number]: string[]
}

export class GradeSchool {
  private internalRoster: SchoolRoster = {}
  
  roster(): SchoolRoster {
    return JSON.parse(JSON.stringify(this.internalRoster))
  }

  add(name: string, gradeLevel: number): void {
    this.removeDuplicates(name)
    
    this.internalRoster[gradeLevel] ?
      this.internalRoster[gradeLevel].push(name)
      : this.internalRoster[gradeLevel] = [name]
    
    this.internalRoster[gradeLevel].sort()
  }

  grade(gradeLevel: number): string[] {
    return this.roster()[gradeLevel] ?? []
  }

  private removeDuplicates(name: string): void {
    const keys = Object.keys(this.internalRoster)
    const nameCurrentKey = Object.values(this.internalRoster)
      .map(arr => arr.indexOf(name) > -1)
      .indexOf(true)
    if (nameCurrentKey > -1) {
      const currentKey = Number(keys[nameCurrentKey])
      this.internalRoster[currentKey] = this.internalRoster[currentKey]
        .filter(oldName => oldName !== name)
    }
  }
}
