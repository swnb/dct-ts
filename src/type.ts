export interface Matrix {
  getValue: (x: number, y: number) => number
}

export interface MatrixPromise {
  getValue: (x: number, y: number) => Promise<number>
}
