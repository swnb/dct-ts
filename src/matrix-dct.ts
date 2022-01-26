import type { Matrix, MatrixPromise } from './type'

export function dctMatrix(matrix: Matrix, m: number, n: number) {
  if (!matrix.getValue) throw Error('matrix must impl method getValue')
  if (!(m > 0 && n > 0)) throw Error('m and n must large than zero')

  const result: number[][] = Array(m)
  for (let i = 0; i < result.length; i++) {
    result[i] = Array(n)
  }

  for (let u = 0; u < m; u++) {
    for (let v = 0; v < n; v++) {
      let value = 0
      for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
          const preValue = matrix.getValue(x, y)
          value +=
            preValue *
            Math.cos((Math.PI * u * (x + 0.5)) / m) *
            Math.cos((Math.PI * v * (y + 0.5)) / n)
        }
      }
      const arg1 = Math.sqrt((u === 0 ? 1 : 2) / m)
      const arg2 = Math.sqrt((v === 0 ? 1 : 2) / n)

      result[u][v] = arg1 * arg2 * value
    }
  }

  return result
}

export function idctMatrix(matrix: Matrix, m: number, n: number) {
  if (!matrix.getValue) throw Error('matrix must impl method getValue')
  if (!(m > 0 && n > 0)) throw Error('m and n must large than zero')

  const result: number[][] = Array(m)
  for (let i = 0; i < result.length; i++) {
    result[i] = Array(n)
  }

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      let value = 0
      for (let u = 0; u < m; u++) {
        for (let v = 0; v < n; v++) {
          const preValue = matrix.getValue(u, v)

          const arg1 = Math.sqrt((u === 0 ? 1 : 2) / m)
          const arg2 = Math.sqrt((v === 0 ? 1 : 2) / n)

          value +=
            arg1 *
            arg2 *
            preValue *
            Math.cos((Math.PI * u * (x + 0.5)) / m) *
            Math.cos((Math.PI * v * (y + 0.5)) / n)
        }
      }

      result[x][y] = value
    }
  }

  return result
}

export async function dctMatrixPromise(matrix: MatrixPromise, m: number, n: number) {
  if (!matrix.getValue) throw Error('matrix must impl method getValue')
  if (!(m > 0 && n > 0)) throw Error('m and n must large than zero')

  const result: number[][] = Array(m)
  for (let i = 0; i < result.length; i++) {
    result[i] = Array(n)
  }

  for (let u = 0; u < m; u++) {
    for (let v = 0; v < n; v++) {
      let value = 0
      for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
          const preValue = await matrix.getValue(x, y)
          value +=
            preValue *
            Math.cos((Math.PI * u * (x + 0.5)) / m) *
            Math.cos((Math.PI * v * (y + 0.5)) / n)
        }
      }
      const arg1 = Math.sqrt((u === 0 ? 1 : 2) / m)
      const arg2 = Math.sqrt((v === 0 ? 1 : 2) / n)

      result[u][v] = arg1 * arg2 * value
    }
  }

  return result
}

export async function idctMatrixPromise(matrix: MatrixPromise, m: number, n: number) {
  if (!matrix.getValue) throw Error('matrix must impl method getValue')
  if (!(m > 0 && n > 0)) throw Error('m and n must large than zero')

  const result: number[][] = Array(m)
  for (let i = 0; i < result.length; i++) {
    result[i] = Array(n)
  }

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      let value = 0
      for (let u = 0; u < m; u++) {
        for (let v = 0; v < n; v++) {
          const preValue = await matrix.getValue(u, v)

          const arg1 = Math.sqrt((u === 0 ? 1 : 2) / m)
          const arg2 = Math.sqrt((v === 0 ? 1 : 2) / n)

          value +=
            arg1 *
            arg2 *
            preValue *
            Math.cos((Math.PI * u * (x + 0.5)) / m) *
            Math.cos((Math.PI * v * (y + 0.5)) / n)
        }
      }

      result[x][y] = value
    }
  }

  return result
}
