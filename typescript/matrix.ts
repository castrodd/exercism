// export class Matrix {
//   private internalRows: number[][]
//   private internalColumns: number[][]
//   constructor(input: string) {
//     /// Get rows
//     const splitInput: string[] = input.split('\n')
//     const rows: number[][] = splitInput.map(stringRow => {
//       let finalArray: number[] = []
//       stringRow.split(' ').map(stringNum => finalArray.push(Number(stringNum)))
//       return finalArray
//     })
//     /// Get columns
//     const length: number = rows.length
//     const columns: number[][] = []
//     for (let i = 0; i < length; i++) {
//       let tempArray: number[] = []
//       rows.map(arr => tempArray.push(arr[i]))
//       columns.push(tempArray)
//     }

//     this.internalRows = rows
//     this.internalColumns = columns
//   }

//   get rows(): number[][] {
//     return this.internalRows
//   }

//   get columns(): number[][] {
//     return this.internalColumns
//   }
// }

// export class Matrix {
  // private input: string
  // constructor(input: string) {
    // this.input = input
  // }
// 
  // get rows(): number[][] {
    // return this.input.split('\n').map(row => row.split(' ').map(Number))
  // }
// 
  // get columns(): number[][] {
    // const columns: number[][] = []
    // for (let i = 0; i < this.rows.length; i++) {
      // let tempArray: number[] = []
      // this.rows.map(arr => tempArray.push(arr[i]))
      // columns.push(tempArray)
    // }
    // return columns
  // }
// }

export class Matrix {
  private input: string
  constructor(input: string) {
    this.input = input
  }

  get rows(): number[][] {
    return this.input.split('\n').map(row => row.split(' ').map(Number))
  }

  get columns(): number[][] {
    const columns: number[][] = this.rows.map(arr => [])
    this.rows.map(arr => arr.map((value, index) => columns[index].push(value)))
    return columns
  }
}
