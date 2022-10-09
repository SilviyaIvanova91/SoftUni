function extractFile(input) {
  input = input.split("\\");
  let last = input.pop();
  last = last.split(".");
  let extantion = last.pop();

  console.log(`File name: ${last.join(".")}`);
  console.log(`File extension: ${extantion}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");

// function extractFile(input) {
//   input = input.split("\\");
//   let fileName = input[input.length - 1].split(".");
//   let extension = fileName.pop();
//   fileName.join(".");
//   console.log(`File name: ${fileName}`);
//   console.log(`File extension: ${extension}`);
// }
//---------------------------------
// function extractFile(input) {
//   let fileNameIndexStart = input.lastIndexOf("\\") + 1;
//   let fileExtantionStart = input.lastIndexOf(".") + 1;
//   let fileNameIndexEnd = fileExtantionStart - 1;
//   let fileName = input.substring(fileNameIndexStart, fileNameIndexEnd);
//   let fileExtension = input.substring(fileExtantionStart);
//   console.log(`File name: ${fileName}`);
//   console.log(`File extension: ${fileExtension}`);
// }
