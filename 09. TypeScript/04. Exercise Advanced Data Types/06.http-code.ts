type SuccessResponse = {
  text: string;
  code: 200 | 201 | 301;
};

type ErrorResponse = {
  text: string;
  code: 400 | 404 | 500;
  printChars?: number;
};

function httpCode(responseObj: SuccessResponse | ErrorResponse) {
  if ("printChars" in responseObj) {
    console.log(responseObj.text.substring(0, responseObj.printChars));
  } else {
    console.log(responseObj.text);
  }
}

httpCode({ code: 200, text: "OK" });
httpCode({ code: 201, text: "Created" });
httpCode({ code: 400, text: "Bad Request", printChars: 4 });
httpCode({ code: 404, text: "Not Found" });
httpCode({ code: 404, text: "Not Found", printChars: 3 });
httpCode({ code: 500, text: "Internal Server Error", printChars: 1 });
