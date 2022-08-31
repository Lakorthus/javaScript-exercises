function checkPassword(password) {
  let oneLowerCaseLetter = /(?=.+[a-z])/;
  let oneUpperCaseLetter = /(?=.+[A-Z])/;
  let oneDigit = /(?=.+[0-9])/;
  let oneSpecialCharacter = /(?=.+[!@£#$^&*])/;
  let minimunEightCharacters = /(?=.+{8.})/;

  let isValid =
    oneLowerCaseLetter.test(password) &&
    oneUpperCaseLetter.test(password) &&
    oneSpecialCharacter.test(password) &&
    oneDigit.test(password) &&
    minimunEightCharacters.test(password);

  return isValid ? "Your password is valid" : "Your password is invalid";
}
