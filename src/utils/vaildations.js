
// This function is being used for checking no items are empty in an object
export const checkObjectValues = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === "") {
        return true;
      }
    }
  }
  return false;
};



// This function is made for checking signup credentails are valid before signing up.
export const validateEmailAndPassword = (email, password, confirmPassword) => {
  // check if email is in correct format
  if (!/\S+@\S+\.\S+/.test(email)) {
    return { status: "error", message: "Invalid email format." };
  }

  // check if password is not empty
  if (password.trim() === "") {
    return { status: "error", message: "Password cannot be empty." };
  }

  // check if password matches confirm password
  if (password !== confirmPassword) {
    return { status: "error", message: "Password and confirm password do not match." };
  }

  // return OK status if all checks pass
  return { status: "ok" };
}
