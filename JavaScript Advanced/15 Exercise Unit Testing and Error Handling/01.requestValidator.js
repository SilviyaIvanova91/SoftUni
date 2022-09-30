function requestValidator(obj) {
  let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let urlRegex = /^[\w.]+$/;

  if (!(obj.method && validMethods.includes(obj.method))) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (!(obj.uri && (obj.uri == "*" || urlRegex.test(obj.uri)))) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (!(obj.version && validVersion.includes(obj.version))) {
    throw new Error("Invalid request header: Invalid Version");
  }

  let msgRegEx = /^[^<>\\&'"]*$/;

  if (
    !(
      obj.hasOwnProperty("message") &&
      (obj.message == "" || msgRegEx.test(obj.message))
    )
  ) {
    throw new Error("Invalid request header: Invalid Message");
  }
  return obj;
}

requestValidator();
requestValidator();
requestValidator();
// {
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   }

//   {
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }
//   {
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
//   }
