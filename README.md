# @swnb/dct

> dct algorithm implement in typescript


![luma](./assets/luma.jpeg) ![dct](./assets/dct.jpeg)

## install

use pnpm

```shell
  pnpm i @swnb/dct
```

use npm

```shell
  npm i @swnb/dct
```

## usage

example

```typescript
  const example = [
    [65, 76, 82, 66, 18, 32],
    [12, 87, 9, 2, 54, 78],
    [74, 45, 18, 48, 60, 72],
    [65, 2, 54, 404, 800, 905],
  ]
```

discrete cosine transform

```typescript
  import { dct } from '@swnb/dct'

  const result = dct(example)

  console.log(result) 
  // [
  //   [
  //     638.5003262854817, -416.9193200063309, 154.99999999999983, 42.4578222082416, -43.01259505462728,
  //     -17.244243642209376,
  //   ],
  //   [
  //     -512.6170218697843, 578.6135814300578, -184.03403633138637, -109.98075816639899,
  //     29.645534009728465, -12.201804240974509,
  //   ],
  //   [
  //     410.2895319161823, -385.13955429855645, 75.4999999999998, 66.54447134560958, 8.660254037844224,
  //     12.49428061324591,
  //   ],
  //   [
  //     -188.89844420398651, 249.46420106733234, -75.84671035435811, 2.2508146252807193,
  //     52.71203828296457, 1.9283180367658657,
  //   ],
  // ]
```

inverse discrete cosine transform

```typescript
  import { idct } from '@swnb/dct'

  const result = dct(example)

  const originData = idct(result)

  console.log(originData)
  // [
  //   [
  //     64.99999999999993,
  //     75.99999999999999,
  //     81.99999999999997,
  //     65.99999999999996,
  //     17.999999999999897,
  //     31.999999999999893
  //   ],
  //   [
  //     11.99999999999998,
  //     87.00000000000003,
  //     8.999999999999943,
  //     1.9999999999999762,
  //     53.99999999999998,
  //     78.00000000000009
  //   ],
  //   [
  //     73.99999999999994,
  //     45.000000000000036,
  //     17.999999999999922,
  //     47.99999999999986,
  //     59.99999999999982,
  //     71.99999999999982
  //   ],
  //   [
  //     64.99999999999974,
  //     2.00000000000048,
  //     53.99999999999999,
  //     404.0000000000001,
  //     799.9999999999999,
  //     904.9999999999995
  //   ]
  // ]
```

## use interface

```typescript
// if you implement Matrix or MatrixPromise

interface Matrix {
  getValue: (x: number, y: number) => number
}

interface MatrixPromise {
  getValue: (x: number, y: number) => Promise<number>
}

```

you can use dctMatrix, dctMatrixPromise, idctMatrix, idctMatrixPromise to process matrix

```typescript
  import { dctMatrix, idctMatrix, dctMatrixPromise, idctMatrixPromise, Matrix, MatrixPromise } from '@swnb/dct'

  declare const m: number // matrix's width
  declare const n: number // matrix's height
  declare const matrix: Matrix // matrix implement { getValue: ( x, y ) => number }  0 <= x < m , 0 <= y < n

  declare const matrixPromise: MatrixPromise

  const result1 = dctMatrix(matrix, m, n)

  const result2 = await dctMatrixPromise(matrixPromise, m, n)
```

