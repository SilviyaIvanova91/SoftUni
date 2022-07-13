function passwordValidator(password) {
  function isLenghtEnought(stringPass) {
    return stringPass.length >= 6 && stringPass.length <= 10;
  }

  function isOnlyLettersAndDigits(stringPass) {
    for (let currCharIndex of stringPass) {
      let currChar = currCharIndex.charCodeAt(0);
      if (
        !(currChar >= 48 && currChar <= 57) &&
        !(currChar >= 65 && currChar <= 90) &&
        !(currChar >= 97 && currChar <= 122)
      ) {
        return false;
      }
    }
    return true;
  }

  function isHavingAtleastTwoDigits(stringPass) {
    let count = 0;
    for (let charIndex of stringPass) {
      let currChar = charIndex.charCodeAt(0);
      if (currChar >= 48 && currChar <= 57) {
        count++;
      }
    }
    return count >= 2 ? true : false;
  }

  let isLengthValid = isLenghtEnought(password);
  let isLettersandDigitsOnly = isOnlyLettersAndDigits(password);
  let isContainingAtLeastTwoDigits = isHavingAtleastTwoDigits(password);
  if (isLengthValid && isLettersandDigitsOnly && isContainingAtLeastTwoDigits) {
    console.log("Password is valid");
  }
  if (!isLengthValid) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isLettersandDigitsOnly) {
    console.log("Password must consist only of letters and digits");
  }
  if (!isContainingAtLeastTwoDigits) {
    console.log("Password must have at least 2 digits");
  }
}

passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
