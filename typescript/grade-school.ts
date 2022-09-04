interface SchoolRoster {
  [index: number]: string[]
}

export class GradeSchool {
  private internalRoster: SchoolRoster = {}
  
  roster(): SchoolRoster {
    return JSON.parse(JSON.stringify(this.internalRoster))
  }

  add(name: string, gradeLevel: number): void {
    const keys = Object.keys(this.internalRoster)
    const nameCurrentKey = Object.values(this.internalRoster)
      .map(arr => arr.indexOf(name) > -1)
      .indexOf(true)
    if (nameCurrentKey > -1) {
      const currentKey = Number(keys[nameCurrentKey])
      this.internalRoster[currentKey] = this.internalRoster[currentKey]
        .filter(oldName => oldName !== name)
    }
    
    if (keys.includes(gradeLevel.toString())) {
      this.internalRoster[gradeLevel].push(name)
      this.internalRoster[gradeLevel].sort()
    } else {
      this.internalRoster[gradeLevel] = [name]
    }
  }

  grade(gradeLevel: number): string[] {
    if (Object.keys(this.internalRoster).includes(gradeLevel.toString())) {
      return this.internalRoster[gradeLevel].map(name => name)
    }
    return []
  }
}
