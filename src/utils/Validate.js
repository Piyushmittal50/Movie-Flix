export const checkValidateDataForSignin = (email, password) => {
    
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Email Id is not Valid";
    if (!isPasswordValid) return "Password is not Valid";

    return null;
}

export const checkValidateDataForSignup = (name, email, password) => {
  const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Enter Valid Name";
  if (!isEmailValid) return "Email Id is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};