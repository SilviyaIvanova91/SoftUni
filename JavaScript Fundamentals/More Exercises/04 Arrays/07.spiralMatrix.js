function spiralMatrix(row, col) {
  let matrix = [];

  for (let i = 0; i < row; i++) {
    matrix.push([]);
  }

  let startRow = 0;
  let startCol = 0;
  let endRow = row - 1;
  let endCol = col - 1;
  let num = 1;

  while (startCol <= endCol || startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = num++;
    }
    for (let i = startRow + 1; i <= endRow; i++) {
      matrix[i][endCol] = num++;
    }
    for (let i = endCol - 1; i >= startCol; i--) {
      matrix[endRow][i] = num++;
    }
    for (let i = endRow - 1; i > startRow; i--) {
      matrix[i][startCol] = num++;
    }
    startRow++;
    startCol++;
    endRow--;
    endCol--;
  }
  console.log(matrix.map((a) => a.join(" ")).join("\n"));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);

//-----------------------------------------------------
// function spiralMatrix(n) {
//   {
//     let total = n * n;
//     let result = [];

//     for (let i = 0; i < n; i++) {
//       let rs = [];
//       for (let j = 0; j < n; j++) {
//         rs.push(0);
//       }
//       result.push(rs);
//     }

//     let x = 0;
//     let y = 0;
//     let step = 0;
//     for (let i = 0; i < total; ) {
//       while (y + step < n) {
//         i++;
//         result[x][y] = i;
//         y++;
//       }
//       y--;
//       x++;

//       while (x + step < n) {
//         i++;
//         result[x][y] = i;
//         x++;
//       }
//       x--;
//       y--;

//       while (y >= step) {
//         i++;
//         result[x][y] = i;
//         y--;
//       }
//       y++;
//       x--;
//       step++;

//       while (x >= step) {
//         i++;
//         result[x][y] = i;
//         x--;
//       }
//       x++;
//       y++;
//     }
//     for (let row of result) {
//       console.log(result);
//     }
//   }
// }
//-------------------------------------------------
// function spiralMatrix([arr]) {
//     printMatrix(getMatrix(arr));

//     function getMatrix(arr) {
//         let [rows, cols] = arr.split(' ')
//                             .filter(x => x != '')
//                             .map(Number);
//         let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows-1, cols-1];
//         let matrix = [];
//         for (let r = 0; r < rows; r++) matrix[r] = [];
//         while (count < maxCount) {
//             for (let c = minCol; c <= maxCol && count < maxCount; c++)	matrix[minRow][c] = ++count;
//             minRow++;
//             for (let r = minRow; r <= maxRow && count < maxCount; r++)	matrix[r][maxCol] = ++count;
//             maxCol--;
//             for (let c = maxCol; c >= minCol && count < maxCount; c--)	matrix[maxRow][c] = ++count;
//             maxRow--;
//             for (let r = maxRow; r >= minRow && count < maxCount; r--)	matrix[r][minCol] = ++count;
//             minCol++;
//         }
//         return matrix;
//     }

//     function printMatrix(matrix) {
//         matrix.forEach(row => console.log(row.join(' ')));
//         // console.log(matrix.map(row => row.join(' ')).join('\n'));
//     }
// }

//-------------------------------------------------------------------
// function generateSpiralMatrix(input) {
//     [rows, cols] = input.map(Number);

//     let matrix = [];
//     for (let row = 0; row < rows; row++) {
//         matrix[row] = [];
//         for (let col = 0; col < cols; col++) {
//             matrix[row][col] = 0;
//         }
//     }

//     let top = 0;
//     let bottom = rows - 1;
//     let left = 0;
//     let right = cols - 1;

//     let index = 1;
//     let direction = 0;
//     while (top <= bottom && left <= right) {
//         switch (direction % 4) {
//             case 0:
//                 for (let col = left; col <= right; col++) {
//                     matrix[top][col] = index++;
//                 }
//                 top++;
//                 direction++;
//                 break;
//             case 1:
//                 for (let row = top; row <= bottom; row++) {
//                     matrix[row][right] = index++;
//                 }
//                 right--;
//                 direction++;
//                 break;
//             case 2:
//                 for (let col = right; col >= left; col--) {
//                     matrix[bottom][col] = index++;
//                 }
//                 bottom--;
//                 direction++;
//                 break;
//             default:
//                 for (let row = bottom; row >= top; row--) {
//                     matrix[row][left] = index++;
//                 }
//                 left++;
//                 direction++;
//                 break;
//         }
//     }

//     console.log(matrix.map(r => r.join(' ')).join('\n'));
// }
