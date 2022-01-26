import { dct, idct } from '..'

function equal(matrix1: number[][], matrix2: number[][], m: number, n: number) {
  if (matrix1.length !== m || matrix2.length !== m) throw Error()
  if (matrix1[0].length !== n || matrix2[0].length !== n) throw Error()

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix1[i][j] !== matrix2[i][j]) throw Error()
    }
  }
  console.log('equal')
}

function genArray(m: number, n: number) {
  const result = Array(m)
  for (let i = 0; i < result.length; i++) {
    result[i] = Array(n)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[i][j] = Math.round(Math.random() * 1000)
    }
  }
  return result
}

function testDct() {
  const m = 10
  const n = 30
  const testArray = genArray(m, n)
  console.log(testArray)
  const resultArray = idct(dct(testArray))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      resultArray[i][j] = Math.round(resultArray[i][j])
    }
  }
  equal(testArray, resultArray, m, n)
}
testDct()
