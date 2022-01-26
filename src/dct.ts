export function dct(matrix: number[][]): number[][] {
  if (!Array.isArray(matrix)) throw Error('dct only accept m x n number matrix')
  const m = matrix.length
  if (m <= 0) {
    return []
  }
  const rowOne = matrix[0]
  if (!Array.isArray(rowOne)) throw Error('dct row muse be number array')
  const n = rowOne.length
  if (n <= 0) {
    return []
  }

  const result: number[][] = Array(m)
  for (let i = 0; i < result.length; i++) {
    result[i] = Array(n)
  }

  for (let u = 0; u < m; u++) {
    for (let v = 0; v < n; v++) {
      let value = 0
      for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
          const preValue = matrix[x][y]
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

export function idct(matrix: number[][]) {
  if (!Array.isArray(matrix)) throw Error('dct only accept m x n number matrix')
  const m = matrix.length
  if (m <= 0) {
    return []
  }
  const rowOne = matrix[0]
  if (!Array.isArray(rowOne)) throw Error('dct row muse be number array')
  const n = rowOne.length
  if (n <= 0) {
    return []
  }

  const result: number[][] = Array(m)
  for (let i = 0; i < result.length; i++) {
    result[i] = Array(n)
  }

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      let value = 0
      for (let u = 0; u < m; u++) {
        for (let v = 0; v < n; v++) {
          const preValue = matrix[u][v]

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
