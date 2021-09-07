function CodelandUsernameValidation(username) { 
  
//   keeps track if the username is valid or not
  let isValid = true;

  // if it is not between 4 to 25 chars
  if (!(username.length >= 4 && username.length <= 25)) {
    isValid = false;
    return isValid;
  }

  // must start with a letter
  if (!(username[0].match(/[a-z]/i))) {
    isValid = false;
    return isValid;
  }

  // checks for any special chars except _ in username
  const specialChars = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (specialChars.test(username)) {
    isValid = false;
    return isValid;
  }

  // cannot end with underscore
  const forbiddenEndChar = "_"
  if (username[username.length - 1] === forbiddenEndChar) {
    isValid = false;
    return isValid;
  }

  return isValid; 

}
   

console.log(CodelandUsernameValidation('aaaaaaaaaa'));
