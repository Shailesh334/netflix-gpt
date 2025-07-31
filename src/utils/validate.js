


export const checkValidData = (email, password) => {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

  if (!validEmail) return "Email is not valid";
  if (!validPassword)
    return "Password is not valid";

  return null;
};