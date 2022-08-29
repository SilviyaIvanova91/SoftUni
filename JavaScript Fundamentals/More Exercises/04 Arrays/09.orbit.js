function orbit(arr) {
  let width = arr[0];
  let height = arr[1];
  let x = arr[2];
  let y = arr[3];
  let matrix = [];

  for (let i = 0; i < height; i++) {
    matrix.push([]);
  }

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let row = Math.abs(i - x);
      let col = Math.abs(j - y);
      matrix[i][j] = Math.max(row, col) + 1;
    }
  }

  console.log(matrix.map((a) => a.join(" ")).join("\n"));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);

//-----------------------------------------------
// function orbit(input) {
//     let rows = input[0];
//     let cols = input[1];
//     let starRow = input[2];
//     let starCol = input[3];

//     let matrix = [];
//     for(let i=0; i<rows; i++) {
//         matrix.push([]);
//     }

//     for(let row = 0; row< rows; row++) {
//         for(let col=0; col<cols; col++) {
//             matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
//         }
//     }

//     console.log(matrix.map(row => row.join(" ")).join("\n"));
// }

//----------------------------------------------------------
// function orbitOfMatrix([size,coordinates]){
//     [size,coordinates] = [size,coordinates].map(item=> item.split(' ').map(Number));
//     let matrix = [];
//     //fill matrix with zeroes
//     for(let i=0;i<size[0];i++) {
//         let rs = [];
//         for(let j=0;j<size[1];j++) {
//             rs.push(0);
//         }
//         matrix.push(rs);
//     }
//     let number = 2;
//     let colEnd = coordinates[1];
//     let rowEnd = coordinates[0];
//     let colStart = coordinates[1];
//     let rowStart = coordinates[0];
//     matrix[coordinates[0]][coordinates[1]] = 1;
//     let counterRowEnd = rowEnd;
//     let counterColEnd = colEnd;
//     let counterRowStart = rowEnd;
//     let counterColStart = colEnd;
//     while(true)
//     {
//         counterRowEnd++;
//         counterColEnd++;
//         counterRowStart--;
//         counterColStart--;
//         //check if out of matrix size
//         if(counterRowEnd > size[0]-1 && counterColEnd > size[1]-1 && counterRowStart < 0 && counterColStart < 0)break;
//         if(rowEnd >= size[0]-1) rowEnd = size[0]-1;
//         else rowEnd++;
//         if(colEnd >= size[1]-1) colEnd = size[1]-1;
//         else colEnd++;
//         if(rowStart == 0) rowStart = 0;
//         else rowStart--;
//         if(colStart == 0) colStart = 0;
//         else colStart--;
//          for (let i = rowStart; i <= rowEnd; i++) {
//             for (let j = colStart; j <= colEnd; j++) {
//                 if(matrix[i][j] == 0){matrix[i][j] = number;}
//             }
//          }
//         number++;
//     }
//     for(let row of matrix){
//         console.log(row.join(' '));
//     }
// }
