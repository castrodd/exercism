export class Matrix {
  private internalRows: number[][]
  private internalColumns: number[][]
  constructor(input: string) {
    /// Get rows
    const splitInput: string[] = input.split('\n')
    const parsedInput: number[][] = splitInput.map(stringRow => {
      let finalArray: number[] = []
      stringRow.split(' ').map(stringNum => finalArray.push(Number(stringNum)))
      return finalArray
    })
    /// Get columns
    const length: number = parsedInput.length
    const columns: number[][] = []
    for (let i = 0; i < length; i++) {
      let tempArray: number[] = []
      parsedInput.map(arr => tempArray.push(arr[i]))
      columns.push(tempArray)
    }

    this.internalRows = parsedInput
    this.internalColumns = columns
  }

  get rows(): number[][] {
    return this.internalRows
  }

  get columns(): number[][] {
    return this.internalColumns
  }
}
